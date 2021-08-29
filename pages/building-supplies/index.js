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
import theme from "../../src/scripts/theme";
import ParallaxContainer from "../../src/components/ParallaxContainer";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "30vh",
  },
  body: {
    margin: "auto",
    "@media (min-width:600px)": {
      width: "50vw",
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

export default function BuildingSupplies() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
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
                <ToSupplies>
                  <Button
                    size="large"
                    className={classes.downButton}
                    style={{ marginBottom: "12rem" }}
                    disabled
                  >
                    <KeyboardArrowDown
                      fontSize="large"
                      className={classes.downButton}
                    />
                  </Button>
                </ToSupplies>
                <ParallaxContainer
                  img={"/laminate.jpg"}
                  title={"Flooring"}
                  text="View"
                  small="true"
                  link="/building-supplies/flooring"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/kitchen.jpg"}
                  title={"Kitchen"}
                  text="View"
                  small="true"
                  link="/building-supplies/kitchen"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/lights.jpg"}
                  title={"Lights"}
                  text="View"
                  small="true"
                  link="/building-supplies/lighting"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/bathroom.jpg"}
                  title={"Bathroom"}
                  text="View"
                  small="true"
                  link="/building-supplies/washroom"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/door.jpg"}
                  title={"Doors"}
                  text="View"
                  small="true"
                  link="/building-supplies/doors"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/handles.jpg"}
                  title={"Metal Hardware"}
                  text="View"
                  small="true"
                  link="/building-supplies/metal-hardware"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/blinds.jpg"}
                  title={"Window Coverings"}
                  text="View"
                  small="true"
                  link="/building-supplies/window-coverings"
                ></ParallaxContainer>
                <ParallaxContainer
                  img={"/card_background.png"}
                  title={"Contact us for more catalogues."}
                  text="View"
                  small="true"
                  link="/about"
                ></ParallaxContainer>
              </div>
            </Fade>
          </Grid>

          {/* <IfMatches /> */}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
