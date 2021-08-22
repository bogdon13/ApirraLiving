import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ExpandMore, Close } from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import theme from "../scripts/theme";

const useStyles = makeStyles({
  list: {
    padding: "10rem",
    height: `100vh`,
    background: `${theme.palette.primary.main}`,
  },
  linkText: {
    textDecoration: `none`,
    color: "#f1f1f1",
    margin: `auto`,
    textAlign: `center`,
    fontSize: `150%`,
    padding: "1rem",
  },
  itemHover: {
    borderRadius: "30px",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.hover}`,
    },
  },
  orarion: {
    margin: `auto`,
    color: `${theme.palette.orarion.main}`,
    fontFamily: "Book Antigua, serif",
    textAlign: `center`,
    fontSize: `large`,
  },
  cancel: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const NavDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ top: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const navDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <Link href={path} key={title}>
            <ListItem button>
              <ListItemText
                disableTypography
                primary={title}
                className={classes.linkText}
              />
            </ListItem>
          </Link>
        ))}
        <ListItem>
          <IconButton
            onClick={toggleDrawer("top", false)}
            edge="start"
            color="inherit"
            aria-label="close menu"
            className={classes.linkText}
          >
            <Close fontSize="large" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        area-label="menu"
        onClick={toggleDrawer("top", true)}
      >
        <ExpandMore
          fontSize="large"
          style={{ color: `white`, zIndex: `999` }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {navDrawerList("top")}
      </SwipeableDrawer>
    </>
  );
};

export default NavDrawer;
