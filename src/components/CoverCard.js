import React from "react";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

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
        <CardMedia
          component={"img"} // add this line to use <img />
          image={props.img}
        />
      </a>
      <Box position={"relative"}>
        <h3>{props.title}</h3>
      </Box>
    </Box>
  );
};

export default CoverCard;
