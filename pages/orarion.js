import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { makeStyles } from "@material-ui/styles";
import orarionImage from "../public/orarion.jpg";
import OrarionInfo from "../src/components/OrarionInfo";
import OrarionDetails from "../src/components/OrarionDetails";
import Image from "next/image";
import { Grow } from "@material-ui/core";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  image: {
    filter: "brightness(50%) !important",
  },
  title: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  highlights: {
    textAlign: "center",
    overflowX: "hidden",
    padding: "4rem",
  },
  details: {
    textAlign: "center",
    overflowX: "hidden",
  },
});

export default function Orarion() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Orarion Group</title>
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
          src={orarionImage}
          layout="fill"
          objectFit="cover"
          className={classes.image}
        />
        <div className={classes.title}>
          <Typography variant="h6">ORARION</Typography>
          <Typography style={{ fontFamily: "Arial Black" }} variant="h3">
            U.S. Distribution
          </Typography>
        </div>
      </div>
      <div className={classes.highlights}>
        <OrarionInfo />
      </div>
      <div className={classes.details}>
        <OrarionDetails />
      </div>
      <div className={classes.highlights}>
        <OrarionInfo type="bottom" />
      </div>
      <Footer />
    </>
  );
}
