export function stickyNavigation() {
  const navWrapperCompensator = document.getElementById(
    'navWrapperCompensator'
  );
  const navWrapper = navWrapperCompensator.querySelector('.nav-wrapper');

  // Fix compensator height to prevent jumps
  function setCompensatorHeight() {
    const navHeight = navWrapper.offsetHeight;
    navWrapperCompensator.style.height = navHeight + 'px';
  }

  setCompensatorHeight();
  window.addEventListener('resize', setCompensatorHeight);

  let isSticky = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      if (!isSticky) {
        navWrapper.classList.add('nav__wrapper--sticky');

        // Let CSS apply visibility one tick later for animation
        requestAnimationFrame(() => navWrapper.classList.add('nav--visible'));

        isSticky = true;
      }
    } else {
      if (isSticky) {
        navWrapper.classList.remove('nav__wrapper--sticky', 'nav--visible');
        isSticky = false;
      }
    }
  });
}
