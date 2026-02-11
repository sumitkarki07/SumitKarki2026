// Performance Monitoring Utilities

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor page load performance
  window.addEventListener('load', () => {
    // Wait for all metrics to be available
    setTimeout(() => {
      reportWebVitals();
      reportPageLoadMetrics();
    }, 0);
  });

  // Monitor navigation performance
  if ('PerformanceObserver' in window) {
    // Observe Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime, 'ms');
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Observe First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime, 'ms');
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
          });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Observe Cumulative Layout Shift (CLS)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
        }
      }
      console.log('CLS:', clsScore);
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(clsScore * 1000),
        });
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
}

/**
 * Report Core Web Vitals
 */
function reportWebVitals() {
  if ('performance' in window && 'PerformanceObserver' in window) {
    const vitals = {
      FCP: 0, // First Contentful Paint
      LCP: 0, // Largest Contentful Paint
      FID: 0, // First Input Delay
      CLS: 0, // Cumulative Layout Shift
      TTFB: 0, // Time to First Byte
    };

    // Get TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      vitals.TTFB = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', vitals.TTFB, 'ms');
    }

    // Get FCP
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      vitals.FCP = fcpEntry.startTime;
      console.log('FCP:', vitals.FCP, 'ms');
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(vitals.FCP),
        });
      }
    }

    return vitals;
  }
}

/**
 * Report detailed page load metrics
 */
function reportPageLoadMetrics() {
  if (!('performance' in window)) return;

  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation) {
    const metrics = {
      'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
      'TCP Connection': navigation.connectEnd - navigation.connectStart,
      'Request Time': navigation.responseStart - navigation.requestStart,
      'Response Time': navigation.responseEnd - navigation.responseStart,
      'DOM Processing': navigation.domContentLoadedEventEnd - navigation.responseEnd,
      'Resource Loading': navigation.loadEventStart - navigation.domContentLoadedEventEnd,
      'Total Load Time': navigation.loadEventEnd - navigation.fetchStart,
    };

    console.table(metrics);

    // Send total load time to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'timing_complete', {
        name: 'page_load',
        value: Math.round(metrics['Total Load Time']),
        event_category: 'Performance',
      });
    }
  }
}

/**
 * Measure component render time
 */
export function measureComponentRender(componentName, callback) {
  const startTime = performance.now();
  const result = callback();
  const endTime = performance.now();
  const renderTime = endTime - startTime;

  console.log(`${componentName} render time:`, renderTime.toFixed(2), 'ms');

  // Send to analytics if render time is slow (>100ms)
  if (renderTime > 100 && typeof gtag !== 'undefined') {
    gtag('event', 'slow_render', {
      event_category: 'Performance',
      event_label: componentName,
      value: Math.round(renderTime),
    });
  }

  return result;
}

/**
 * Track resource loading errors
 */
export function trackResourceErrors() {
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      console.error('Resource loading error:', event.target);
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: `Resource load error: ${event.target.src || event.target.href}`,
          fatal: false,
        });
      }
    }
  }, true);
}

/**
 * Monitor bundle size in development
 */
export function logBundleSize() {
  if (import.meta.env.DEV) {
    const resources = performance.getEntriesByType('resource');
    const jsResources = resources.filter((r) => r.name.includes('.js'));
    const cssResources = resources.filter((r) => r.name.includes('.css'));

    const totalJSSize = jsResources.reduce((acc, r) => acc + r.transferSize, 0);
    const totalCSSSize = cssResources.reduce((acc, r) => acc + r.transferSize, 0);

    console.log('📦 Bundle Sizes:');
    console.log('  JavaScript:', (totalJSSize / 1024).toFixed(2), 'KB');
    console.log('  CSS:', (totalCSSSize / 1024).toFixed(2), 'KB');
    console.log('  Total:', ((totalJSSize + totalCSSSize) / 1024).toFixed(2), 'KB');
  }
}

/**
 * Lazy load images with Intersection Observer
 */
export function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Prefetch links for faster navigation
 */
export function prefetchLinks() {
  if ('IntersectionObserver' in window) {
    const linkObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target;
          const href = link.getAttribute('href');
          
          if (href && !href.startsWith('#') && !link.getAttribute('data-prefetched')) {
            const linkElement = document.createElement('link');
            linkElement.rel = 'prefetch';
            linkElement.href = href;
            document.head.appendChild(linkElement);
            link.setAttribute('data-prefetched', 'true');
          }
        }
      });
    });

    // Observe all anchor links
    document.querySelectorAll('a[href]').forEach((link) => {
      linkObserver.observe(link);
    });
  }
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  initPerformanceMonitoring();
  trackResourceErrors();
  logBundleSize();
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      prefetchLinks();
    });
  } else {
    initLazyLoading();
    prefetchLinks();
  }
}
