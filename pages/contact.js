import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Navbar from "../src/components/Navbar";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contact
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
