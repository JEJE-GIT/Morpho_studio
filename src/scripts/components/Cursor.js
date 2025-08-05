export default class Cursor {
  constructor(element) {
    this.element = element;
    this.init();
    document.documentElement.classList.add('custom-cursor');
  }

  init() {
    //console.log('Je suis Cursor');
    this.initCursorAction();
    this.initHoverAnimation();
  }

  initCursorAction() {
    document.addEventListener('mousemove', this.followCursor.bind(this)); //Quand la souris bouge...
    document.addEventListener('mousedown', this.onMouseDown.bind(this)); //Quand la souris en train de cliquer...
    document.addEventListener('mouseup', this.onMouseUp.bind(this)); //Quand la souris fini de cliquer...
  }

  initHoverAnimation() {
    //Fait le tour des liens
    const links = document.querySelectorAll(
      'a:not([data-no-cursor-hover]), button:not([data-no-cursor-hover])'
    ); //Va chercher les liens et les boutons qui n'ont pas de "data-no-cursor-hover"

    for (let i = 0; i < links.length; i++) {
      const link = links[i];

      link.addEventListener('mouseenter', this.onLinkHover.bind(this)); //quand le cursor survol un lien...
      link.addEventListener('mouseleave', this.onLinkOut.bind(this)); //quand le cursor sort d'un lien...
    }
  }

  followCursor(evt) {
    //console.log(evt);
    const mouseX = evt.pageX; //Prends la position en X du cursor
    const mouseY = evt.pageY; //Prends la position en Y du cursor

    this.element.style.left = `${mouseX}px`; //le div "cursor" va suivre la souris en X
    this.element.style.top = `${mouseY}px`; //le div "cursor" va suivre la souris en Y
  }

  onLinkHover() {
    this.element.classList.add('hover');
  }

  onLinkOut() {
    this.element.classList.remove('hover');
  }

  onMouseDown() {
    this.element.classList.add('down');
  }

  onMouseUp() {
    this.element.classList.remove('down');
  }
}
