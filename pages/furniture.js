import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "next/link";
import Copyright from "../src/Copyright";
import Navbar from "../src/components/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import theme from "../src/scripts/theme";
import { makeStyles } from "@material-ui/styles";
import couchImage from "../public/couch.jpg";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import FurnitureCarousel from "../src/components/FurnitureCarousel";
import FurnitureLightbox from "../src/components/FurnitureLightbox";

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
  hoveringTextRes: {
    position: "absolute",
    top: "60%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    border: "none",
    // backgroundColor: `${theme.palette.standard.main}`,
    color: `white`,
    // "&:hover": {
    //   border: "none",
    //   backgroundColor: `${theme.palette.standard.main}`,
    //   color: `${theme.palette.primary.main}`,
    // },
    // "@media (max-width:800px)": {
    //   color: `${theme.palette.primary.main}`,
    //   backgroundColor: `${theme.palette.standard.main}`,
    // },
  },
  hoveringTextCom: {
    position: "absolute",
    top: "60%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    border: "none",
    // backgroundColor: `${theme.palette.standard.main}`,
    color: `white`,
    // "&:hover": {
    //   border: "none",
    //   backgroundColor: `${theme.palette.standard.main}`,
    //   color: `${theme.palette.primary.main}`,
    // },
    // "@media (max-width:800px)": {
    //   color: `${theme.palette.primary.main}`,
    //   backgroundColor: `${theme.palette.standard.main}`,
    // },
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
  carouselContainer: {
    width: "80%",
    height: "auto",
    margin: "0 auto",
    padding: "10px",
    position: "relative",
    marginTop: "50px",
    marginBottom: "50px",
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselImages = [
  "/carousel1.jpeg",
  "/carousel2.jpeg",
  "/carousel3.jpeg",
  "/carousel4.jpeg",
];

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
          Furniture
        </Typography>
        <Grid container spacing={3}>
          {/* <Grid item xs={6} sm={3}>
            <Typography className={classes.hoveringTextRes} variant="h2">
              Residential
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.hoveringTextCom} variant="h2">
              Commercial
            </Typography>
          </Grid> */}
        </Grid>
      </div>
      <div className={classes.carouselContainer}>
        <div>
          <Typography variant="h3">Residential</Typography>
          <FurnitureCarousel images={carouselImages} />
        </div>
        <div>
          <Typography variant="h3">Commercial</Typography>
          <FurnitureCarousel images={carouselImages} />
        </div>
      </div>
      <Footer />
    </>
  );
}
