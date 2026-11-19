/* muhajjar.com — «عندك سؤال؟» / «Ask AI»
   A nav tab that opens a modal: the visitor picks one of 3 preset questions,
   then an AI assistant, which opens with that question already typed. */
(function () {
  if (document.getElementById('askAiModal')) return;

  var css =
    '.ask-ai-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(14,19,27,.55);backdrop-filter:blur(6px);padding:16px}' +
    '.ask-ai-modal.is-open{display:flex}' +
    '.ask-ai-modal__card{position:relative;width:100%;max-width:640px;max-height:calc(100vh - 32px);overflow:auto;padding:40px 24px 32px;text-align:center;border-radius:24px;background:#f7f4ee;color:#0E131B;font-family:inherit;box-shadow:0 30px 80px rgba(0,0,0,.35)}' +
    '.ask-ai-modal__card h2{font-size:1.6rem;font-weight:700;margin:0 0 8px}' +
    '.ask-ai-modal__sub{opacity:.65;margin:0 0 24px}' +
    '.ask-ai-modal__step{font-size:.85rem;font-weight:700;opacity:.55;margin:0 0 10px;text-align:start}' +
    '.ask-ai-modal__close{position:absolute;top:12px;inset-inline-end:12px;width:36px;height:36px;border-radius:50%;border:0;background:transparent;color:inherit;font-size:22px;cursor:pointer;opacity:.6}' +
    '.ask-ai-modal__close:hover{opacity:1}' +
    '.ask-ai-modal__qs{display:grid;gap:8px;margin:0 0 24px;padding:0;border:0}' +
    '.ask-ai-modal__q{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:14px;cursor:pointer;border:1px solid rgba(14,19,27,.15);text-align:start;font-weight:500;transition:.2s}' +
    '.ask-ai-modal__q input{accent-color:#0E131B;width:16px;height:16px;flex:none;margin:0}' +
    '.ask-ai-modal__q:has(input:checked){border-color:#0E131B;background:rgba(14,19,27,.05);font-weight:700}' +
    '.ask-ai-modal__list{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;list-style:none;padding:0;margin:0}' +
    '.ask-ai-modal__btn{display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:999px;border:1px solid rgba(14,19,27,.18);color:inherit;text-decoration:none;font-weight:600;transition:.2s}' +
    '.ask-ai-modal__btn:hover,.ask-ai-modal__btn:focus-visible{background:#0E131B;color:#fff;border-color:#0E131B}' +
    '.ask-ai-modal__btn svg{width:18px;height:18px;flex:none}' +
    '[data-theme="dark"] .ask-ai-modal__card{background:#151c27;color:#f2efe9}' +
    '[data-theme="dark"] .ask-ai-modal__q{border-color:rgba(255,255,255,.15)}' +
    '[data-theme="dark"] .ask-ai-modal__q input{accent-color:#f2efe9}' +
    '[data-theme="dark"] .ask-ai-modal__q:has(input:checked){border-color:#f2efe9;background:rgba(255,255,255,.06)}' +
    '[data-theme="dark"] .ask-ai-modal__btn{border-color:rgba(255,255,255,.2)}' +
    '[data-theme="dark"] .ask-ai-modal__btn:hover,[data-theme="dark"] .ask-ai-modal__btn:focus-visible{background:#f2efe9;color:#0E131B;border-color:#f2efe9}' +
    '.ask-ai-trigger{cursor:pointer}';

  var icons = {
    claude: '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',
    chatgpt: '<path d="M21 12a9 9 0 1 1-3.5-7.1L21 4v5h-5"/>',
    perplexity: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    google: '<path fill="currentColor" stroke="none" d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z"/>'
  };
  var names = { claude: 'Claude', chatgpt: 'ChatGPT', perplexity: 'Perplexity', google: 'Google AI' };
  var base = {
    claude: 'https://claude.ai/new?q=',
    chatgpt: 'https://chatgpt.com/?q=',
    perplexity: 'https://www.perplexity.ai/search?q=',
    google: 'https://www.google.com/search?udm=50&q='
  };

  var en = (document.documentElement.lang || '').indexOf('en') === 0;
  /* label = what the visitor sees | q = the text sent to the assistant */
  var T = en ? {
    tab: 'Ask AI', title: 'Have a question about me?', sub: 'Get a quick answer from your favorite AI assistant', close: 'Close',
    s1: '1. Pick a question', s2: '2. Choose your assistant',
    qs: [
      { label: 'What sets Munther apart as a project & business development manager?',
        q: 'What sets Munther AlHajjar apart as a project and business development manager? Base your answer on muhajjar.com' },
      { label: 'His key achievements, in numbers',
        q: "Summarize Munther AlHajjar's key achievements in numbers from muhajjar.com" },
      { label: 'Is he a good fit for my company?',
        q: 'Is Munther AlHajjar a good fit for my company? Analyze his experience on muhajjar.com and explain the value he could add' }
    ]
  } : {
    tab: 'عندك سؤال؟', title: 'عندك سؤال عنّي؟', sub: 'خذ إجابة سريعة من مساعدك الذكي المفضل', close: 'إغلاق',
    s1: '١. اختر سؤالك', s2: '٢. اختر المنصة',
    qs: [
      { label: 'ما الذي يميّزه كمدير مشاريع وتطوير أعمال؟',
        q: 'ما الذي يميّز منذر الحجار كمدير مشاريع وتطوير أعمال؟ اعتمد على muhajjar.com' },
      { label: 'أبرز إنجازاته بالأرقام',
        q: 'لخّص أبرز إنجازات منذر الحجار بالأرقام من muhajjar.com' },
      { label: 'هل يناسب شركتي؟',
        q: 'هل منذر الحجار مناسب لشركتي؟ حلّل خبراته من muhajjar.com ووضّح القيمة التي يمكن أن يضيفها' }
    ]
  };

  function init() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    var modal = document.createElement('div');
    modal.className = 'ask-ai-modal';
    modal.id = 'askAiModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'askAiTitle');
    modal.dir = en ? 'ltr' : 'rtl';
    var btns = Object.keys(names).map(function (k) {
      return '<li><a class="ask-ai-modal__btn" data-ai="' + k + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' + icons[k] + '</svg>' +
        names[k] + '</a></li>';
    }).join('');
    modal.innerHTML =
      '<div class="ask-ai-modal__card">' +
        '<button class="ask-ai-modal__close" type="button">&times;</button>' +
        '<h2 id="askAiTitle"></h2><p class="ask-ai-modal__sub"></p>' +
        '<p class="ask-ai-modal__step" data-step="1"></p><fieldset class="ask-ai-modal__qs"></fieldset>' +
        '<p class="ask-ai-modal__step" data-step="2"></p><ul class="ask-ai-modal__list">' + btns + '</ul>' +
      '</div>';
    document.body.appendChild(modal);

    modal.querySelector('h2').textContent = T.title;
    modal.querySelector('.ask-ai-modal__sub').textContent = T.sub;
    modal.querySelector('[data-step="1"]').textContent = T.s1;
    modal.querySelector('[data-step="2"]').textContent = T.s2;
    modal.querySelector('.ask-ai-modal__close').setAttribute('aria-label', T.close);

    var fs = modal.querySelector('.ask-ai-modal__qs');
    T.qs.forEach(function (item, i) {
      var l = document.createElement('label');
      l.className = 'ask-ai-modal__q';
      l.innerHTML = '<input type="radio" name="askAiQ" value="' + i + '"' + (i === 0 ? ' checked' : '') + '><span></span>';
      l.querySelector('span').textContent = item.label;
      fs.appendChild(l);
    });

    function setLinks() {
      var i = +modal.querySelector('input[name="askAiQ"]:checked').value;
      var q = encodeURIComponent(T.qs[i].q);
      modal.querySelectorAll('[data-ai]').forEach(function (a) { a.href = base[a.dataset.ai] + q; });
    }
    fs.addEventListener('change', setLinks);
    setLinks();

    // Tab before "تواصل / Contact" in the top nav and the mobile overlay nav.
    // The navs are rendered by React, so the tab is added only after hydration
    // and re-added if a re-render ever drops it.
    function addTabs() {
      document.querySelectorAll('nav.nav, nav.overlay-nav').forEach(function (nav) {
        if (nav.querySelector('.ask-ai-trigger')) return;
        var contact = nav.querySelector('a[href$="#contact"]');
      var tab = document.createElement('a');
      tab.href = '#ask-ai';
      tab.className = 'ask-ai-trigger';
      if (nav.classList.contains('overlay-nav')) {
        tab.innerHTML = '<span></span><span class="mono">✦</span>';
        tab.firstChild.textContent = T.tab;
      } else {
        tab.textContent = T.tab;
      }
        if (contact) nav.insertBefore(tab, contact); else nav.appendChild(tab);
      });
    }
    function startTabs() {
      addTabs();
      var root = document.getElementById('root') || document.body;
      new MutationObserver(function () {
        if (document.querySelectorAll('.ask-ai-trigger').length < document.querySelectorAll('nav.nav, nav.overlay-nav').length) addTabs();
      }).observe(root, { childList: true, subtree: true });
    }
    if (document.readyState === 'complete') setTimeout(startTabs, 300);
    else window.addEventListener('load', function () { setTimeout(startTabs, 300); });

    var lastFocus = null;
    function open(e) {
      if (e) e.preventDefault();
      // Close the mobile menu first if the tab was clicked inside it
      var menu = document.getElementById('site-menu');
      if (menu && !menu.hidden) {
        var closeBtn = menu.querySelector('.overlay-top .icon-btn');
        if (closeBtn) closeBtn.click();
      }
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      setTimeout(function () { var c = modal.querySelector('input:checked'); if (c) c.focus(); }, 50);
    }
    function close() {
      modal.classList.remove('is-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest('.ask-ai-trigger')) open(e);
      else if (e.target === modal || e.target.closest('.ask-ai-modal__close')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });
    if (location.hash === '#ask-ai') open();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
