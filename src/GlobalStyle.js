import { createGlobalStyle } from 'styled-components';
import { FONT_JURA } from './constants';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        }

    html {
        scroll-behavior: smooth;
        }

    html, body {
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6,a {
        font-family: ${FONT_JURA}, sans-serif;
        text-transform: uppercase;
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export default GlobalStyle;
