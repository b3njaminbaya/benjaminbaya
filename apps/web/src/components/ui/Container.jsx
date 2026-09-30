/**
 * Shared layout container. Every section wraps its content in this component
 * so the horizontal grid aligns consistently across the site.
 */
const Container = ({ children, className = '', as: Tag = 'div' }) => (
  <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}>{children}</Tag>
);

export default Container;
