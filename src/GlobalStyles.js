import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {

     /* ========== Colors ==========*/
    --bg-color-secondary-lighter: #E7F5F6;
    --bg-color-secondary-light: #119DA4;
    --bg-color-secondary-dark: #1F2C3D;
    --text-color: #FFFFFF;
    --text-color-secondary: #303030;
    --body-line-height: 24px;

    /* ========== Fonts and Typography ==========*/
    --body-font: "Roboto";
    --body-font-fallback: sans-serif;

    --big-font-size: 2.25rem;
    --large-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

     /* ========== Margin Bottoms ==========*/
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

     /* ========== Fonts Weights ==========*/
    --font-light: 300;
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 700;

}


*,
::before,
::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: var(--body-font), var(--body-font-fallback);
  font-size: var(--bodyFontSize);
  font-weight: var(--font-regular);
  color: var(--text-color-secondary);
  line-height: var(--body-line-height);
    
}

img {
    display: block;
}

a {
  color: var(--anchorColor);
  outline: 0;
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: underline;
}

ul {
    list-style: none;
}


/* ============ Layout ============ */
.container {
    ${"" /* max-width: 768px; */}
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
}

@media (min-width: 1440px){
  .container {
    margin-left: 7.5rem;
    margin-right: 7.5rem;
  }
  
}

.grid {
    display: grid;
    gap: 1.5rem;
}
`;
