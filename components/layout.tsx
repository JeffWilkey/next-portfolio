import Head from "next/head";
import Nav from "./nav";
import config from "../config.json";
import styles from "./layout.module.scss";
import { Box, Flex, Heading } from "theme-ui";

export default function Layout({ children, pageTitle }) {
  return (
    <Flex
      sx={{
        justifyContent: "center",
      }}
    >
      <Head>
        <title>{`${config.name} | ${pageTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1080px",
        }}
      >
        <Nav />
        {children}
      </Box>
    </Flex>
  );
}
