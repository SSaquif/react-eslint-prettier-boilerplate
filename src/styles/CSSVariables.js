import { createGlobalStyle } from 'styled-components';

const CSSVariables = createGlobalStyle`
:root{
      /* Font Sizes */
  --large-screen-font: 20px;
  --desktop-font: 16px; /* Beleive this is browser standard*/
  --tablet-font: 16px;
  --mobile-font: 12px;
  /*  */
}
`;
export default CSSVariables;
