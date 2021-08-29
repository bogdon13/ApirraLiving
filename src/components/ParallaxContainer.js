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
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "20px",
  left: "50%",
  top: "20%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontSize: "450%",
};

const inlineStyle2 = {
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "20px",
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  fontSize: "250%",
};

function ParallaxContainer(props) {
  return (
    <Parallax bgImage={props.img} strength={500}>
      <div style={{ height: 800 }}>
        <Typography variant="h1" style={inlineStyle}>
          {props.title}
        </Typography>
      </div>
      <div style={{ height: 400 }}>
        <Typography variant="h3" style={inlineStyle2}>
          {props.text}
        </Typography>
      </div>
    </Parallax>
  );
}

export default ParallaxContainer;
