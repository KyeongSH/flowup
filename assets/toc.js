/* 매뉴얼 좌측 TOC — 활성 챕터 하이라이트 + 좁은 화면 토글 */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toc = document.querySelector('nav.toc.side');
    if (!toc) return;

    /* -------- 1) 좁은 화면 전용 토글 버튼 -------- */
    var toggle = document.createElement('button');
    toggle.className = 'toc-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', '목차 열기/닫기');
    toggle.innerHTML = '☰';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', function () {
      toc.classList.toggle('open');
    });

    /* TOC 링크 클릭 시 좁은 화면에서는 자동 닫기 */
    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 720px)').matches) {
          toc.classList.remove('open');
        }
      });
    });

    /* -------- 2) 활성 챕터 하이라이트 (scroll-based) -------- */
    var idToLink = {};
    var chapterIds = [];
    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      idToLink[id] = a;
      chapterIds.push(id);
    });

    var chapters = chapterIds
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (!chapters.length) return;

    var currentActive = null;
    function setActive(id) {
      if (id === currentActive) return;
      currentActive = id;
      links.forEach(function (a) { a.classList.remove('active'); });
      if (id && idToLink[id]) {
        var a = idToLink[id];
        a.classList.add('active');
        // 사이드바 안에서 활성 링크가 보이도록 스크롤(부드럽지 않게, 사이드바만)
        try {
          var linkTop = a.offsetTop;
          var linkBottom = linkTop + a.offsetHeight;
          if (linkTop < toc.scrollTop + 20 || linkBottom > toc.scrollTop + toc.clientHeight - 20) {
            toc.scrollTop = linkTop - toc.clientHeight / 2;
          }
        } catch (e) { /* ignore */ }
      }
    }

    /* 현재 뷰포트 상단(오프셋 포함)을 이미 지나간 마지막 챕터 = 활성 챕터 */
    var OFFSET = 120; // 상단 여백 (챕터 제목이 뷰포트 상단 근처에 오면 활성화)
    function computeActive() {
      var y = window.scrollY || window.pageYOffset || 0;
      var scanY = y + OFFSET;
      var activeId = chapters[0].id;
      for (var i = 0; i < chapters.length; i++) {
        var top = chapters[i].getBoundingClientRect().top + y;
        if (top <= scanY) {
          activeId = chapters[i].id;
        } else {
          break;
        }
      }
      /* 페이지 최하단 근처면 마지막 챕터 활성화 (짧은 마지막 챕터 대응) */
      var docHeight = document.documentElement.scrollHeight;
      var viewHeight = window.innerHeight;
      if (y + viewHeight >= docHeight - 40) {
        activeId = chapters[chapters.length - 1].id;
      }
      setActive(activeId);
    }

    /* rAF throttle */
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        computeActive();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    computeActive(); // 초기값
  });
})();
