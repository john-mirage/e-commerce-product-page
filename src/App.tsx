import theme from "@assets/styles/theme";
import GlobalStyle from "@assets/styles/global-style";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <h1>Titre</h1>
            </ThemeProvider>
        </>
    );
}

export default App;
