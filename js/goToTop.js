export function goToTop() {
  const goUpButton = document.getElementById('upBtn');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      goUpButton.style.display = 'flex';
    } else {
      goUpButton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  window.goUpFunction = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}
