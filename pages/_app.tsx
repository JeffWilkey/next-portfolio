import React from "react";
import { ThemeProvider, ThemeProviderProps } from "theme-ui";
import { AppProps } from "next/app";
import Prism from "@theme-ui/prism";
import theme from "../theme";
import "../styles/globals.scss";

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
