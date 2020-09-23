import React from "react";
import { ThemeProvider } from "theme-ui";
import { AppProps } from "next/app";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
