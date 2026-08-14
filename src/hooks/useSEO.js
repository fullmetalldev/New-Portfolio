import { useEffect } from 'react';
import { updateSEO } from './utils';

/**
 * React hook to update SEO meta tags
 * @param {Object} seoData - SEO data object
 * @param {string} seoData.title - Page title
 * @param {string} seoData.description - Meta description
 * @param {string} [seoData.keywords] - Meta keywords
 * @param {string} [seoData.image] - OG image URL
 * @param {string} [seoData.url] - Page URL
 * @param {string} [seoData.type] - Page type (website, article, etc.)
 * @param {Array} [dependencies] - Effect dependencies (default: [])
 * 
 * @example
 * useSEO({
 *   title: 'My Page',
 *   description: 'Page description',
 *   keywords: 'seo, meta, tags'
 * });
 */
export const useSEO = (seoData, dependencies = []) => {
  useEffect(() => {
    updateSEO(seoData);
  }, dependencies);
};

export default useSEO;
