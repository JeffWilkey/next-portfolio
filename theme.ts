import { base } from "@theme-ui/presets";

export default {
  ...base,
  fonts: {
    body: "Open Sans, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    nav: "#333",
  },
  nav: {
    brand: {
      fontFamily: "heading",
      fontWeight: "900",
      textTransform: "uppercase",
      cursor: "pointer",
      color: "nav",
      transition: ".4s",
      fontSize: "1.65em",
      borderRight: "solid 4px",
      borderRightColor: "nav",
      pl: "1em",
      pr: "1em",
      borderLeft: "solid 4px",
      borderLeftColor: "primary",
      "&:hover": {
        color: "primary",
        paddingRight: "1em",
        borderRightColor: "primary",
        borderLeftColor: "nav",
      },
    },
    link: {
      fontFamily: "heading",
      fontWeight: 500,
      cursor: "pointer",
      color: "nav",
      transition: ".4s",
      p: "1em",
      "&:hover": {
        color: "primary",
        fontSize: "1.1em",
      },
    },
    button: {
      m: "1em",
      p: "0.5em 1em",
      backgroundColor: "none",
      border: "solid 2px",
      borderColor: "primary",
      borderRadius: "4px",
      cursor: "pointer",
      fontFamily: "heading",
      fontSize: "1em",
      fontWeight: 500,
      color: "nav",
      transition: ".4s",

      "&:hover": {
        color: "#fff",
        backgroundColor: "#333",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
    },
    fontWeights: {
      body: 400,
      heading: 700,
    },
  },
};
