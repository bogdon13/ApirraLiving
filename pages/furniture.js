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
import Footer from "../src/components/Footer";
import theme from "../src/scripts/theme";
import { makeStyles } from "@material-ui/styles";
import couchImage from "../public/couch.jpg";
import Image from "next/image";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "60vh",
  },
  title: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: "1rem",
  },
  residentialBtn: {
    position: "absolute",
    top: "60%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: `${theme.palette.standard.main}`,
    color: `${theme.palette.primary.main}`,
    "&:hover": {
      border: "none",
      backgroundColor: `${theme.palette.standard.main}`,
      color: `${theme.palette.primary.main}`,
    },
    "@media (max-width:800px)": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.standard.main}`,
    },
  },
  commercialBtn: {
    position: "absolute",
    top: "60%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: `${theme.palette.standard.main}`,
    color: `${theme.palette.primary.main}`,
    "&:hover": {
      border: "none",
      backgroundColor: `${theme.palette.standard.main}`,
      color: `${theme.palette.primary.main}`,
    },
    "@media (max-width:800px)": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.standard.main}`,
    },
  },
  body: {
    margin: "auto",
    "@media (min-width:600px)": {
      width: "60vw",
    },
  },
  downButton: {
    width: 70,
    height: 70,
    borderRadius: "30px",
    color: `${theme.palette.secondary.main}`,
  },
  anchor: {
    display: "hidden",
  },
});
export default function Furniture() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Furniture</title>
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar />
      <div className={classes.imageContainer}>
        <Image
          placeholder="blur"
          src={couchImage}
          layout="fill"
          objectFit="cover"
        />
        <Typography className={classes.title} variant="h1">
          Apirra Living
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              size="large"
              className={classes.residentialBtn}
            >
              <Typography variant="h4">Residential</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              size="large"
              className={classes.commercialBtn}
            >
              <Typography variant="h4">Commercial</Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
      {/* <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Furniture
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
      <Footer />
    </>
  );
}
