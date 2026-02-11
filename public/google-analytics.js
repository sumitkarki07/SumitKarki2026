// Google Analytics Configuration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configure your Google Analytics property
gtag('config', 'G-XXXXXXXXXX', {
  'page_title': 'Sumit Karki - Software Engineer Portfolio',
  'send_page_view': true
});

// Track custom events
export function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

// Track page views for SPA
export function trackPageView(url) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-XXXXXXXXXX', {
      'page_path': url
    });
  }
}

// Track outbound links
export function trackOutboundLink(url, label) {
  trackEvent('click', {
    'event_category': 'outbound',
    'event_label': label,
    'transport_type': 'beacon',
    'event_callback': function() {
      window.open(url, '_blank');
    }
  });
}

// Track project link clicks
export function trackProjectClick(projectName) {
  trackEvent('project_click', {
    'event_category': 'engagement',
    'event_label': projectName
  });
}

// Track contact form submission
export function trackContactSubmission() {
  trackEvent('form_submission', {
    'event_category': 'engagement',
    'event_label': 'contact_form'
  });
}
