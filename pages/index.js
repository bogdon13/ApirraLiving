import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import Flagship from "../src/components/Flagship";
import Navbar from "../src/components/Navbar";

const useStyles = makeStyles({
  addPadding: {
    paddingTop: "50px",
  },
  attentionGrabber: {
    color: `white`,
    position: `relative`,
    paddingBottom: `1rem`,
  },
  spacer: {
    width: `100%`,
    height: `10rem`,
  },
  contactButton: {
    color: `white`,
    marginTop: `1rem`,
  },
  mainWindow: {
    minHeight: `95vh`,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Flagship />
    </>
  );
}
