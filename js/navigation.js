export function navigation() {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav__link a');
  const body = document.body;

  // Open mobile menu
  openMenuBtn.addEventListener('click', () => {
    navLinks.classList.add('nav__links-show');
    body.classList.add('lock-scroll');
  });

  // Close mobile menu with close button
  closeMenuBtn.addEventListener('click', () => {
    closeMobileMenu();
  });

  // Close when clicking any link inside the menu
  navLinkItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = openMenuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMobileMenu();
    }
  });

  // Close menu function
  function closeMobileMenu() {
    navLinks.classList.remove('nav__links-show');
    body.classList.remove('lock-scroll');
  }
}
