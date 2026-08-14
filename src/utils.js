export const isMobile = () => {
  return window.innerWidth <= 768;
};


export const scrollToId = (id) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

/**
 * Update SEO meta tags dynamically
 * @param {Object} seoData - SEO data object
 * @param {string} seoData.title - Page title
 * @param {string} seoData.description - Meta description
 * @param {string} [seoData.keywords] - Meta keywords
 * @param {string} [seoData.image] - OG image URL
 * @param {string} [seoData.url] - Page URL
 * @param {string} [seoData.type] - Page type (website, article, etc.)
 */
export const updateSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  // Update title
  if (title) {
    document.title = title;
    updateMetaTag('og:title', title);
    updateMetaTag('twitter:title', title);
    updateMetaTag('name', title);
  }

  // Update description
  if (description) {
    updateMetaTag('description', description);
    updateMetaTag('og:description', description);
    updateMetaTag('twitter:description', description);
  }

  // Update keywords
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Update OG image
  if (image) {
    updateMetaTag('og:image', image);
    updateMetaTag('twitter:image', image);
  }

  // Update URL
  if (url) {
    updateMetaTag('og:url', url);
    updateMetaTag('twitter:url', url);
    updateCanonicalTag(url);
  }

  // Update type
  if (type) {
    updateMetaTag('og:type', type);
  }
};

/**
 * Update or create a meta tag
 * @param {string} attribute - Meta tag attribute (name or property)
 * @param {string} content - Meta tag content
 */
const updateMetaTag = (attribute, content) => {
  let tag = document.querySelector(
    `meta[name="${attribute}"], meta[property="${attribute}"]`
  );

  if (!tag) {
    tag = document.createElement('meta');
    // Determine if it's a property or name attribute
    const isProperty = ['og:', 'twitter:'].some(prefix => attribute.startsWith(prefix));
    if (isProperty) {
      tag.setAttribute('property', attribute);
    } else {
      tag.setAttribute('name', attribute);
    }
    document.head.appendChild(tag);
  }

  tag.content = content;
};

/**
 * Update canonical URL tag
 * @param {string} url - Canonical URL
 */
const updateCanonicalTag = (url) => {
  let canonicalTag = document.querySelector('link[rel="canonical"]');

  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = 'canonical';
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.href = url;
};