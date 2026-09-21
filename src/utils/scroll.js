export function scrollToSection(href) {
  const element = document.querySelector(href);
  if (!element) return;
  const offset = window.innerWidth < 768 ? 64 : 88;
  const scroller = document.scrollingElement || document.documentElement;
  const top = element.getBoundingClientRect().top + scroller.scrollTop - offset;
  scroller.scrollTo({ top, behavior: 'smooth' });
}
