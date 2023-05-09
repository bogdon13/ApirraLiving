import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import CoverCard from "./CoverCard";
import theme from "../scripts/theme";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "15vw",
    width: "15vw",
    display: "flex",
    flexDirection: "column",
  },
}));

const cards = [
  {
    data: {
      img: "/wood-flooring.jpg",
      title: "Flooring",
      link: "/building-supplies/flooring",
    },
  },
  {
    data: {
      img: "/kitchen.jpg",
      title: "Kitchen",
      link: "/building-supplies/kitchen",
    },
  },
  {
    data: {
      img: "/lights.jpg",
      title: "Lighting",
      link: "/building-supplies/lighting",
    },
  },
  {
    data: {
      img: "/bathroom.jpg",
      title: "Washroom",
      link: "/building-supplies/washroom",
    },
  },
  {
    data: {
      img: "/door.jpg",
      title: "Doors",
      link: "/building-supplies/doors",
    },
  },
  {
    data: {
      img: "/handles.jpg",
      title: "Metal Hardware",
      link: "/building-supplies/metal-hardware",
    },
  },
  {
    data: {
      img: "/blinds.jpg",
      title: "Window Coverings",
      link: "/building-supplies/window-coverings",
    },
  },
  {
    data: {
      img: "/card_background.png",
      title: "Contact Us",
      link: "/contact",
    },
  },
];

export default function SuppliesAlbum() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}></div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={0}>
            {cards.map((card) => {
              return (
                <>
                  <Grid
                    className={classes.links}
                    item
                    key={card.data.title}
                    xs={12}
                    sm={6}
                    lg={3}
                  >
                    <CoverCard
                      title={card.data.title}
                      img={card.data.img}
                      link={card.data.link}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
