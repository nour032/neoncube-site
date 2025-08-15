export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const event = ({ action, category, label, value }) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Pre-order tracking
export const trackPreOrder = (model) => {
    event({
        action: 'pre_order_initiated',
        category: 'ecommerce',
        label: model,
    });
};

// Page section visibility tracking
export const trackSectionView = (sectionName) => {
    event({
        action: 'section_view',
        category: 'engagement',
        label: sectionName,
    });
};