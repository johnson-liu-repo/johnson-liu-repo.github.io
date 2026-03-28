/**
 * Shared site components — header, navigation, footer, and common scripts.
 *
 * Each page provides lightweight placeholder elements:
 *   <header id="site-header"></header>
 *   <nav    id="site-nav"></nav>
 *   <footer id="site-footer"></footer>
 *
 * After including this script and last-updated.js, call  initSite()  to
 * render every shared section and wire up the active-link highlight and
 * last-updated date.
 */
(function () {

  /* ── navigation data (root-relative paths) ── */

  var NAV_LINKS = [
    { href: '/home.html',                                       text: 'Home' },
    { href: '/projects/llm_jailbreak/llm_jailbreak.html',       text: 'LLM Jailbreak' },
    { href: '/projects/sentiment_analysis/sentiment.html',       text: 'Sentiment Analysis' },
    { href: '/projects/dominion_ai/dominion.html',               text: 'Dominion AI' },
    { href: '/projects/civicsim/civicsim.html',                  text: 'CivicSim' },
    { href: '/projects/content/content.html',                    text: 'Content Creation' },
    { href: '/projects/dev/dev.html',                            text: 'Indie Game Development' },
    { href: '/projects/scp/scp.html',                            text: 'SCP Wiki Entries' },
    { href: '/projects/undergraduate/undergraduate.html',        text: 'Undergraduate' }
  ];

  /* ── hero / header ── */

  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;

    el.innerHTML =
      '<div class="hero">' +
        '<center>' +
          '<img src="/home_images/dvc_uop_07.png" style="width: 40%; height: 40%;" alt="DVC UOP Logo 7">' +
          '<img src="/home_images/dvc_uop_03.png" style="width: 40%; height: 40%;" alt="DVC UOP Logo 3">' +
        '</center>' +
        '<div class="hero-text">' +
          '<h1>Johnson Liu</h1>' +
          '<p>Projects Portfolio</p>' +
        '</div>' +
      '</div>';
  }

  /* ── sidebar navigation ── */

  function renderNav() {
    var el = document.getElementById('site-nav');
    if (!el) return;

    var items = NAV_LINKS.map(function (link) {
      return '<li><a href="' + link.href + '">' + link.text + '</a></li>';
    }).join('\n            ');

    el.innerHTML = '<ul>\n            ' + items + '\n        </ul>';
  }

  function highlightActiveNav() {
    document.querySelectorAll('nav a').forEach(function (link) {
      if (link.pathname === window.location.pathname) {
        link.classList.add('active');
      }
    });
  }

  /* ── footer ── */

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML =
      '<p>' +
        '<span id="last-updated">Last updated </span> \u2022 Site hosted with GitHub Pages' +
      '</p>';
  }

  /* ── last-updated date via GitHub API ── */

  function initLastUpdated() {
    if (typeof window.updateLastUpdated !== 'function') return;

    var repoRelativePath = window.location.pathname.replace(/^\//, '');

    window.updateLastUpdated({
      elementId:     'last-updated',
      owner:         'johnson-liu-repo',
      repo:          'johnson-liu-repo.github.io',
      filePath:      repoRelativePath,
      fallbackToNow: true
    });
  }

  /* ── public entry point ── */

  window.initSite = function () {
    renderHeader();
    renderNav();
    renderFooter();
    highlightActiveNav();
    initLastUpdated();
  };

})();
