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
import Link from "next/link";
import theme from "../../src/scripts/theme";

const inlineStyleSmall = {
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "5px",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontSize: "450%",
};

const inlineStyle = {
  background: "rgba(10, 10, 10, 0.7)",
  color: "white",
  borderRadius: "5px",
  left: "50%",
  top: "30%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
  fontSize: "4rem",
};

const inlineStyle2 = {
  background: "rgba(10, 10, 10, 0.7)",
  color: "white",
  borderRadius: "5px",
  left: "50%",
  top: "60%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  fontSize: "2rem",
};

function ParallaxContainer(props) {
  if (props.small === "true")
    return (
      <Parallax bgImage={props.img} strength={500}>
        <div style={{ height: 400 }}>
          <Typography variant="h1" style={inlineStyleSmall}>
            <Link href={props.link}>{props.title}</Link>
          </Typography>
        </div>
      </Parallax>
    );
  else
    return (
      <Parallax bgImage={props.img} strength={800}>
        <div style={{ height: 500 }}>
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
