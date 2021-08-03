import { createGlobalStyle } from 'styled-components';

const GlobaStyles = createGlobalStyle`
/**
 * Set default box-sizing to border-box to everything 
 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/**
 * html, body & elemet with id root to have height 100%
 */
html, 
body, 
#root {
  height: 100%;
};

/** 
 * Prefers Reduced Motion 
 */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}
`;

export default GlobaStyles;
