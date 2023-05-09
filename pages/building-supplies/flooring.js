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
import { Parallax } from "react-parallax";
import ParallaxContainer from "../../src/components/ParallaxContainer";

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
        img={"/laminate.jpg"}
        title={"Laminate"}
        text="Select from a variety of laminate flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/engineered.jpg"}
        title={"Engineered"}
        text="Engineered flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/carpet.jpg"}
        title={"Carpet"}
        text="Select from a variety of carpet flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/tile.jpg"}
        title={"Tile"}
        text="Select from a variety of tile flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/vinyl.jpg"}
        title={"Vinyl"}
        text="Select from a variety of vinyl flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/pavers.jpg"}
        title={"Pavers"}
        text="Select from a variety of laminate flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/stone.jpg"}
        title={"Stone"}
        text="Select from a variety of laminate flooring options."
      ></ParallaxContainer>
      <ParallaxContainer
        img={"/pvc-patio.jpg"}
        title={"PVC Patio"}
        text="We fulfill requests for a variety of PVC patios."
      ></ParallaxContainer>
      <Footer />
    </div>
  );
}

export default App;
