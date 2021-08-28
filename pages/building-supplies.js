import * as React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Navbar from "../src/components/Navbar";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import lumberImage from "../public/iStock-920495528.jpg";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "30vh",
  },
  body: { margin: "auto" },
});

export default function BuildingSupplies() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.body}>
        <div className={classes.imageContainer}>
          <Image
            placeholder="blur"
            src={lumberImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ width: "100vw" }}
        >
          <Grid item>
            <div style={{ textAlign: "center" }}>
              <Typography
                variant="h1"
                style={{ fontWeight: 500, margin: "2rem" }}
              >
                Building Supplies
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
