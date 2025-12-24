export class LazyIframeLoader {
  constructor(options = {}) {
    this.lazyIframes = document.querySelectorAll('iframe.lazyload--js');
    this.offset = options.offset || 170;

    // Only initialize if we have iframes to lazy load
    if (this.lazyIframes.length > 0) {
      this.init();
    }
  }

  init() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: `0px 0px ${this.offset}px 0px`,
        threshold: 0,
      };

      this.observer = new IntersectionObserver(
        this.onIntersection.bind(this),
        observerOptions
      );

      this.lazyIframes.forEach((iframe) => this.observer.observe(iframe));
    } else {
      this.loadAllIframes();
    }
  }

  onIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        this.loadIframe(iframe);
        observer.unobserve(iframe);
      }
    });
  }

  loadIframe(iframe) {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
    }
    iframe.onload = () => {
      iframe.classList.add('is-loaded');
      iframe.dispatchEvent(new CustomEvent('iframe:loaded'));
    };
    iframe.classList.remove('lazyload--js');
  }

  loadAllIframes() {
    this.lazyIframes.forEach((iframe) => this.loadIframe(iframe));
  }
}

// REMOVE THIS LINE - no auto-initialization
// new LazyIframeLoader({ offset: 200 });
