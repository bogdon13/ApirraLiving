import React from "react";
import Navbar from "../../src/components/Navbar";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Footer from "../../src/components/Footer";
import ParallaxContainer from "../../src/components/ParallaxContainer";

import { Parallax } from "react-parallax";

const inlineStyle = {
  background: "#fff",
  left: "50%",
  top: "35%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const inlineStyle2 = {
  background: "#fff",
  left: "50%",
  top: "75%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

const useStyles = makeStyles({
  attentionGrabber: {
    color: `white`,
    position: `relative`,
    paddingBottom: `1rem`,
  },
  title: {
    color: `white`,
    marginBottom: `5vh`,
  },
  imgContainer: {
    marginBottom: 50,
  },
});

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar></Navbar>
      <ParallaxContainer
        img={"/tub.jpg"}
        title={"Baths and Showers"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/sink.jpg"}
        title={"Faucets and Sinks"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/vanity.jpg"}
        title={"Vanities"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/led-mirror.jpg"}
        title={"LED Mirrors"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/countertops.jpg"}
        title={"Countertops"}
        text="Catalog"
      ></ParallaxContainer>
      <Footer />
    </div>
  );
}

export default App;
