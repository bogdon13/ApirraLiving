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
        img={"/led-bulb.jpg"}
        title={"LED Bulbs"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/fixture.jpg"}
        title={"Fixtures"}
        text="Catalog"
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/chandelier.jpg"}
        title={"Chandeliers"}
        text="Catalog"
      ></ParallaxContainer>
      <Footer />
    </div>
  );
}

export default App;
