export default class Header {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const html = document.getElementById('html_document');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);

        if (!expanded) {
          hamburger.classList.add('is-active');
          mobileMenu.hidden = false;
          html.classList.add('overflow-hidden');
          void mobileMenu.offsetWidth;
          mobileMenu.style.opacity = '1';
          mobileMenu.style.transform = 'translateY(0)';
        } else {
          hamburger.classList.remove('is-active');
          html.classList.remove('overflow-hidden');
          mobileMenu.style.opacity = '0';
          mobileMenu.style.transform = 'translateY(-20px)';
          mobileMenu.addEventListener('transitionend', function handler() {
            mobileMenu.hidden = true;
            mobileMenu.removeEventListener('transitionend', handler);
          });
        }
      });
    }
  }
}
