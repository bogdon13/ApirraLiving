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
      <h1></h1>
      <Parallax bgImage="/led-bulb.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>LED Bulbs</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/fixture.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Fixture</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>

      <h1></h1>
      <Parallax bgImage="/chandelier.jpg" strength={500}>
        <div style={{ height: 800 }}>
          <h1 style={inlineStyle}>Chandeliers</h1>
        </div>
        <div style={{ height: 400 }}>
          <div style={inlineStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            lobortis rhoncus leo non dictum. Donec nisi mi, sodales sed mattis
            ac, pellentesque id mauris. Maecenas consequat porttitor massa eget
            eleifend. Nam vel imperdiet ante. Praesent dictum, massa nec euismod
            placerat, turpis augue ornare lectus, et iaculis ante nibh in magna.
            Pellentesque vulputate justo eget est condimentum, at feugiat elit
            congue. Sed volutpat nec ex sed malesuada. In nec aliquam eros, quis
            bibendum lorem. Vivamus posuere a mauris a vestibulum. Integer
            tellus urna, hendrerit ac tellus vitae, congue viverra nulla.
          </div>
        </div>
      </Parallax>
      <h1></h1>
      <Footer />
    </div>
  );
}

export default App;
