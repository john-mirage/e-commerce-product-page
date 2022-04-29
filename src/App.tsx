import theme from "@assets/styles/theme";
import GlobalStyle from "@assets/styles/global-style";
import {ThemeProvider} from "styled-components";
import TopAppBar from "@components/top-app-bar/top-app-bar";
import Gallery from "@components/gallery/gallery";

function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <TopAppBar />
        <Gallery />
      </ThemeProvider>
    </>
  );
}

export default App;
