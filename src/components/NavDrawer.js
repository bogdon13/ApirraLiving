import React from "react";
import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  KeyboardArrowDown,
} from "@material-ui/core";
import { ExpandMore, Close } from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import theme from "../scripts/theme";

const useStyles = makeStyles({
  list: {
    height: `100vh`,
    width: `100vw`,
    background: `${theme.palette.primary.main}`,
    margin: `auto`,
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
    fontSize: `150%`,
    padding: "1rem",
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
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };
  const isOrarion = (link) => {
    if (link === "ORARION") return classes.orarion;
    else return classes.linkText;
  };
  const navDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => {
          if (title === "Products") {
            return (
              <div key={title}>
                <Menu
                  id="simple-menu1"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
                  onClick={handleClose1}
                >
                  <Link href={path[0].path}>
                    <MenuItem>{path[0].title}</MenuItem>
                  </Link>
                  <Link href={path[1].path}>
                    <MenuItem>{path[1].title}</MenuItem>
                  </Link>
                </Menu>
                <ListItem
                  button
                  className={classes.itemHover}
                  onClick={handleClick1}
                >
                  <ListItemText
                    disableTypography
                    primary={title}
                    className={isOrarion(title)}
                  />
                </ListItem>
              </div>
            );
          } else if (title === "Services") {
          } else
            return (
              <Link href={path} key={title}>
                <ListItem button className={classes.itemHover}>
                  <ListItemText
                    disableTypography
                    primary={title}
                    className={isOrarion(title)}
                  />
                </ListItem>
              </Link>
            );
        })}
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
