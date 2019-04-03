import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #CB356B;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #BD3F32, #CB356B);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #BD3F32, #CB356B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }
`;