/* hero.js - scroll-driven burger frame animation (native scroll + position: sticky + Canvas) */
(function () {
    'use strict';

    // ---- Configuration (images/frames/frame_001.jpg ... frame_090.jpg used, 1280x720 JPG) ----
    var FRAME_COUNT = 90;
    // Frames 091-192 exist on disk but are intentionally not used; only 001-090 play.
    var FRAME_DIR = 'images/frames/frame_';
    var CONTAIN_BELOW = 1.25; // canvas boxes narrower than this aspect show the whole burger (no zoom)
    var FRAME_EXT = '.jpg';
    // Burger sits on the right side of each frame; this square crop keeps it and drops the white margin.
    var CROP = { x: 560, y: 0, w: 720, h: 720 };
    // Animation finishes at this scroll progress; the rest is a short "hold" while still pinned.
    var ANIM_END = 0.9;
    var MAX_CONCURRENT = 4;
    var MAX_CANVAS_WIDTH = 1600;

    var hero = document.getElementById('home');
    var stage = hero && hero.querySelector('.burger-hero__stage');
    var canvas = document.getElementById('burger-canvas');
    if (!hero || !stage || !canvas) { return; }
    if (hero.getAttribute('data-hero-init') === '1') { return; }
    hero.setAttribute('data-hero-init', '1');

    var ctx = canvas.getContext ? canvas.getContext('2d') : null;
    if (!ctx) { hero.classList.add('frames-failed'); return; }

    var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var reduced = !!(motionQuery && motionQuery.matches);

    // ---- State ----
    var images = new Array(FRAME_COUNT);
    var status = new Uint8Array(FRAME_COUNT); // 0 idle, 1 loading, 2 ready, 3 failed
    var inFlight = 0;
    var targetIndex = 0;     // frame the current scroll position asks for
    var drawnIndex = -1;     // frame currently on the canvas
    var canvasW = 0, canvasH = 0;
    var trackTop = 0, scrollable = 1;
    var tickQueued = false, drawQueued = false, resizeTimer = 0;
    var failed = false;

    function url(i) {
        var n = String(i + 1);
        while (n.length < 3) { n = '0' + n; }
        return FRAME_DIR + n + FRAME_EXT;
    }
    function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

    // ---- Frame loading ----
    function loadFrame(i) {
        if (i < 0 || i >= FRAME_COUNT || status[i] !== 0) { return; }
        status[i] = 1;
        inFlight++;
        var img = new Image();
        img.decoding = 'async';
        var done = function (ok) {
            inFlight--;
            if (ok) { status[i] = 2; images[i] = img; } else { status[i] = 3; }
            if (ok) { onFrameReady(i); } else { onFrameFailed(i); }
            pump();
        };
        img.onload = function () {
            // Pre-decode so drawing during scroll doesn't stall; ignore decode errors (draw still works).
            if (img.decode) {
                img.decode().then(function () { done(true); }, function () { done(img.naturalWidth > 0); });
            } else {
                done(img.naturalWidth > 0);
            }
        };
        img.onerror = function () { done(false); };
        img.src = url(i);
    }

    // Next frame to fetch: closest to the current position, looking forward first.
    function nextToLoad() {
        for (var d = 0; d < FRAME_COUNT; d++) {
            var f = targetIndex + d, b = targetIndex - d;
            if (f < FRAME_COUNT && status[f] === 0) { return f; }
            if (b >= 0 && status[b] === 0) { return b; }
        }
        return -1;
    }

    function pump() {
        if (reduced || failed) { return; }
        while (inFlight < MAX_CONCURRENT) {
            var next = nextToLoad();
            if (next === -1) { return; }
            loadFrame(next);
        }
    }

    function nearestReady(i) {
        if (status[i] === 2) { return i; }
        for (var d = 1; d < FRAME_COUNT; d++) {
            if (i - d >= 0 && status[i - d] === 2) { return i - d; }
            if (i + d < FRAME_COUNT && status[i + d] === 2) { return i + d; }
        }
        return -1;
    }

    function firstNeededIndex() { return reduced ? FRAME_COUNT - 1 : 0; }

    function onFrameReady(i) {
        if (i === firstNeededIndex() || drawnIndex === -1) { hero.classList.add('has-frames'); }
        requestDraw();
    }

    function onFrameFailed(i) {
        // If the very first needed frame is missing, fall back to the gradient hero (text + CTA stay usable).
        if (i === firstNeededIndex() && nearestReady(i) === -1) { setFailed(); }
    }

    function setFailed() {
        failed = true;
        hero.classList.add('frames-failed');
        hero.classList.remove('has-frames');
    }

    // ---- Canvas sizing & drawing ----
    function resizeCanvas() {
        var cssW = canvas.clientWidth, cssH = canvas.clientHeight;
        if (!cssW || !cssH) { return; }
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = Math.round(cssW * dpr), h = Math.round(cssH * dpr);
        if (w > MAX_CANVAS_WIDTH) { h = Math.round(h * MAX_CANVAS_WIDTH / w); w = MAX_CANVAS_WIDTH; }
        if (w !== canvasW || h !== canvasH) {
            canvasW = w; canvasH = h;
            canvas.width = w; canvas.height = h; // resets the bitmap
            drawnIndex = -1;
        }
        canvas.classList.toggle('fit-contain', cssW / cssH < CONTAIN_BELOW);
    }

    function drawFrame(idx) {
        var img = images[idx];
        if (!img || !canvasW || !canvasH) { return; }
        var contain = canvasW / canvasH < CONTAIN_BELOW;
        // contain: whole burger visible (no zoom); cover: fills the box
        var scale = contain ? Math.min(canvasW / CROP.w, canvasH / CROP.h) : Math.max(canvasW / CROP.w, canvasH / CROP.h);
        var dw = CROP.w * scale, dh = CROP.h * scale;
        var dx = canvasW - dw;               // anchor to the right edge (burger bleeds off that side)
        var dy = (canvasH - dh) / 2;
        ctx.clearRect(0, 0, canvasW, canvasH);
        ctx.drawImage(img, CROP.x, CROP.y, CROP.w, CROP.h, dx, dy, dw, dh);
        drawnIndex = idx;
    }

    function render() {
        drawQueued = false;
        if (failed) { return; }
        var idx = reduced ? FRAME_COUNT - 1 : targetIndex;
        var use = nearestReady(idx); // never clear to blank: keep showing the closest valid frame
        if (use === -1 || use === drawnIndex) { return; }
        drawFrame(use);
    }

    function requestDraw() {
        if (drawQueued) { return; }
        drawQueued = true;
        window.requestAnimationFrame(render);
    }

    // ---- Scroll mapping ----
    function measure() {
        trackTop = hero.getBoundingClientRect().top + window.pageYOffset;
        scrollable = Math.max(1, hero.offsetHeight - stage.offsetHeight);
    }

    function update() {
        tickQueued = false;
        if (reduced || failed) { return; }
        var p = clamp((window.pageYOffset - trackTop) / scrollable, 0, 1);
        var t = clamp(p / ANIM_END, 0, 1);
        targetIndex = Math.round(t * (FRAME_COUNT - 1));
        hero.classList.toggle('is-complete', targetIndex === FRAME_COUNT - 1);
        hero.classList.toggle('is-scrolled', p > 0.015);
        requestDraw();
        pump();
    }

    function onScroll() {
        if (tickQueued) { return; }
        tickQueued = true;
        window.requestAnimationFrame(update);
    }

    function onResize() {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(function () {
            resizeCanvas();
            measure();
            update();
            render();
        }, 100);
    }

    // ---- Reduced motion: no pinned scrub; show the finished frame and all content ----
    function applyMotionPreference() {
        reduced = !!(motionQuery && motionQuery.matches);
        hero.classList.toggle('is-reduced', reduced);
        if (reduced) {
            hero.classList.add('is-complete');
            hero.classList.remove('is-scrolled');
            loadFrame(FRAME_COUNT - 1);
        } else {
            hero.classList.remove('is-complete');
            loadFrame(0);
        }
        resizeCanvas();
        measure();
        update();
        requestDraw();
        pump();
    }

    // ---- Init ----
    hero.classList.add('is-ready');
    applyMotionPreference();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', function () { measure(); update(); });
    window.addEventListener('pageshow', function () { measure(); update(); });
    if (motionQuery) {
        if (motionQuery.addEventListener) { motionQuery.addEventListener('change', applyMotionPreference); }
        else if (motionQuery.addListener) { motionQuery.addListener(applyMotionPreference); }
    }
})();
