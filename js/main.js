import { goToTop } from './goToTop.js';
import { navigation } from './navigation.js';
import { stickyNavigation } from './stickyNavigation.js';
import { LazyIframeLoader } from './lazyLoadingIframe.js';

// Get the access to HTML elements

function allFunctions() {
  document.addEventListener('DOMContentLoaded', (event) => {
    // Make the nav bar sticky
    stickyNavigation();
    // Manage the top menu (Navigation)
    navigation();
    // Lazy loading of the iframe (map) - CREATE INSTANCE
    new LazyIframeLoader({ offset: 200 });
    // Go to top button
    goToTop();
  });
}

allFunctions();
