import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Navbar from "../../src/components/Navbar";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { KeyboardArrowDown } from "@material-ui/icons";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";
import Fade from "@material-ui/core/Fade";
import Footer from "../../src/components/Footer";
import SuppliesAlbum from "../../src/components/SuppliesAlbum";
import ToSupplies from "../../src/components/ToSupplies";
import lumberImage from "../../public/lumber.jpg";
import Head from "next/head";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "30vh",
  },
  body: {
    margin: "auto",
    "@media (min-width:600px)": {
      width: "60vw",
    },
  },
  downButton: { width: 70, height: 70, borderRadius: "30px" },
  anchor: {
    display: "hidden",
  },
});

export default function BuildingSupplies() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const IfMatches = () => {
    if (matches) {
      return (
        <>
          <SuppliesAlbum />
          <div id="supplies-album" className={classes.anchor} />
        </>
      );
    } else {
      return (
        <>
          <div id="supplies-album" className={classes.anchor} />
          <SuppliesAlbum />
        </>
      );
    }
  };
  return (
    <>
      <Head>
        <title>Building Supplies</title>
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
          src={lumberImage}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}>
            <Fade
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...{ timeout: 1000 }}
            >
              <div style={{ textAlign: "center" }}>
                <Typography variant="h1" style={{ marginTop: "2rem" }}>
                  Building Supplies
                </Typography>
                <Typography
                  className={classes.body}
                  variant="h4"
                  style={{
                    marginTop: "2rem",
                    marginBottom: "2rem",
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
                  }}
                >
                  No matter the build plan, we carry the supplies needed for
                  every trade. If we don't stock it, we will source every
                  material you need for your next big project. Contact us to
                  find out more!
                </Typography>
              </div>
            </Fade>
          </Grid>

          <ToSupplies>
            <Button size="large" className={classes.downButton}>
              <KeyboardArrowDown
                fontSize="large"
                className={classes.downButton}
              />
            </Button>
          </ToSupplies>
          <IfMatches />
        </Grid>
      </div>
      <Footer />
    </>
  );
}
