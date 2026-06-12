/* ============================================
   JAY TARAVIYA — SHOPIFY DEVELOPER PORTFOLIO
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === CUSTOM CURSOR ===
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (cursor && cursorFollower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    const animateCursor = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top  = followerY + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();
  }

  // === NAV SCROLL ===
  const nav = document.querySelector('.nav');
  const handleNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // === MOBILE MENU ===
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu__close');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    const closeFn = () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };
    if (mobileClose) mobileClose.addEventListener('click', closeFn);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeFn));
  }

  // === SCROLL REVEAL ===
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // === LIGHTHOUSE METERS ===
  const meters = document.querySelectorAll('.lighthouse-meter');
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fg = entry.target.querySelector('.fg');
        const score = parseInt(fg?.getAttribute('data-score') || '0');
        const circumference = 283;
        const offset = circumference - (score / 100) * circumference;
        if (fg) {
          setTimeout(() => { fg.style.strokeDashoffset = offset; }, 200);
        }
        meterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  meters.forEach(m => {
    const fg = m.querySelector('.fg');
    if (fg) { fg.style.strokeDashoffset = '283'; }
    meterObserver.observe(m);
  });

  // === COUNTER ANIMATION ===
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const start = performance.now();
        const ease = t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;

        const update = (now) => {
          const t = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(ease(t) * target) + suffix;
          if (t < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // === TYPEWRITER HERO ROLE ===
  const typewriterEl = document.querySelector('.typewriter');
  if (typewriterEl) {
    const phrases = [
      'Shopify Liquid Developer',
      'eCommerce Frontend Dev',
      'Theme Architect',
      'Figma → Shopify Builder',
      'Performance Optimizer'
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    const type = () => {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        typewriterEl.textContent = current.slice(0, --charIndex);
      } else {
        typewriterEl.textContent = current.slice(0, ++charIndex);
      }
      let delay = isDeleting ? 45 : 80;
      if (!isDeleting && charIndex === current.length) {
        delay = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
      }
      setTimeout(type, delay);
    };
    type();
  }

  // === SECTION BUILDER DEMO ===
  const demoToggles = document.querySelectorAll('.demo-toggle input');
  const demoCard = document.querySelector('.demo-product-card');
  if (demoToggles.length && demoCard) {
    const updateDemo = () => {
      const state = {};
      demoToggles.forEach(t => { state[t.id] = t.checked; });

      const desc = demoCard.querySelector('.demo-product-desc');
      const reviews = demoCard.querySelector('.demo-product-reviews');
      const badge = demoCard.querySelector('.demo-product-badge');
      const swatches = demoCard.querySelector('.demo-product-swatches');

      if (desc)    desc.style.display    = state['toggle-desc']    ? '' : 'none';
      if (reviews) reviews.style.display = state['toggle-reviews'] ? '' : 'none';
      if (badge)   badge.style.display   = state['toggle-badge']   ? '' : 'none';
      if (swatches) swatches.style.display = state['toggle-colors'] ? '' : 'none';
    };

    demoToggles.forEach(t => t.addEventListener('change', updateDemo));
    updateDemo();
  }

  // === SMOOTH ANCHOR LINKS ===
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === CONTACT FORM ===
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'var(--green)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  // === MAGNETIC BUTTONS ===
  const magneticBtns = document.querySelectorAll('.btn--primary, .btn--outline');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px) translateY(-2px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // === ACTIVE NAV LINK on SCROLL ===
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => sectionObserver.observe(s));

  // === TRUST STRIP DUPLICATE ===
  const trustScroll = document.querySelector('.trust__scroll');
  if (trustScroll) {
    const clone = trustScroll.cloneNode(true);
    trustScroll.parentNode.appendChild(clone);
  }

});
