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
  body: {
    margin: "auto",
    "@media (min-width:600px)": {
      width: "60vw",
    },
  },
});

export default function BuildingSupplies() {
  const classes = useStyles();
  return (
    <>
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
                No matter the build plan, we carry the supplies needed for every
                trade. If we don't stock it, we will source every material you
                need for your next big project. Contact us to find out more!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
