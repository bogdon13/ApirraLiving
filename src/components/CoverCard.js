import React from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import theme from "../scripts/theme";

const styles = () => ({
  root: ({ bgColor = "rgba(0, 0, 0, 0.08)", bgPosition = "center" }) => ({
    position: "absolute",
    width: "50rem",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: bgColor,
    backgroundPosition: bgPosition,
  }),
});

const CoverCard = (props) => {
  return (
    <Box position={"relative"} width={"25rem"} height={"100%"} p={6}>
      <a href={props.link}>
        <Box position={"relative"} style={{ textAlign: "center" }}>
          <h3 style={{ color: `${theme.palette.secondary.main}` }}>
            {props.title}
          </h3>
        </Box>

        <CardMedia
          component={"img"} // add this line to use <img />
          image={props.img}
        />
      </a>
    </Box>
  );
};

export default CoverCard;
