import createDOMPurify from 'dompurify';

// Create a singleton instance of DOMPurify
const purify = createDOMPurify(window);

// Create a wrapper around DOMPurify to ensure consistent configuration
export const DOMPurify = {
  sanitize: (input: string): string => {
    if (!input) return '';
    
    return purify.sanitize(input, {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [], // No attributes allowed
      KEEP_CONTENT: true, // Keep the content of disallowed tags
      RETURN_DOM: false, // Return a string, not a DOM object
      RETURN_DOM_FRAGMENT: false,
      WHOLE_DOCUMENT: false,
      SANITIZE_DOM: true
    });
  }
};

export default DOMPurify;