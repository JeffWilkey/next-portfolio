import Head from "next/head";
import Link from "next/link";
import { Flex, Box } from "theme-ui";
import config from "../config.json";
import styles from "./layout.module.scss";

export default function Layout({ children, pageTitle }) {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
      }}
    >
      <Head>
        <title>{`${config.name} | ${pageTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          flex: "1",
          maxWidth: ["auto", "auto", "300px"],
          minHeight: ["auto", "auto", "100vh"],
        }}
        bg="primary"
      >
        Box
      </Box>
      <Box sx={{ flex: "3" }} bg="secondary">
        Box
      </Box>
      {children}
    </Flex>
  );
}
