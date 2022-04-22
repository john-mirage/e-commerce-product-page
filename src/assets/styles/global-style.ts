import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        margin: 0;
        font-family:
            'Kumbh Sans',
            system-ui,
            -apple-system,
            'Segoe UI',
            Roboto,
            Helvetica,
            Arial,
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji';
        }
`;

export default GlobalStyle;