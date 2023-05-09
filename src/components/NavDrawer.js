import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import theme from "../scripts/theme";

const NavDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ top: false });
  const [open, setOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [style, setStyle] = useState(`${theme.palette.primary.main}`);

  const useStyles = makeStyles({
    list: {
      height: `100vh`,
      width: `100vw`,
      background: style,
    },
    subList: {
      backgroundColor: `${theme.palette.primary.hover}`,
    },
    nav: {
      maxHeight: "100%",
      overflow: "hidden",
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
      whiteSpace: "nowrap",
      // "&:hover": {
      //   backgroundColor: `${theme.palette.primary.hover}`,
      // },
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
  const classes = useStyles();

  const handleClickProducts = () => {
    if (openServices) {
      setOpenServices(false);
    }
    setOpenProducts(!openProducts);
  };

  const handleClickServices = () => {
    if (openProducts) {
      setOpenProducts(false);
    }
    setOpenServices(!openServices);
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
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" className={classes.nav}>
        {navLinks.map(({ title, path }) => {
          if (title === "Products")
            return (
              <div key={title}>
                <ListItem
                  button
                  className={classes.itemHover}
                  onClick={handleClickProducts}
                >
                  {openProducts ? (
                    <ExpandLessIcon fontSize="large" style={{ opacity: 0 }} />
                  ) : (
                    <ExpandMoreIcon fontSize="large" style={{ opacity: 0 }} />
                  )}
                  <ListItemText
                    disableTypography
                    primary={title}
                    className={isOrarion(title)}
                  />
                  {openProducts ? (
                    <ExpandLessIcon
                      fontSize="large"
                      style={{ color: `white` }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      fontSize="large"
                      style={{ color: `white` }}
                    />
                  )}
                </ListItem>

                <Collapse in={openProducts} timeout="auto" unmountOnExit>
                  <Divider />
                  <List
                    className={classes.subList}
                    component="div"
                    disablePadding
                  >
                    <ListItem button>
                      <Link href={path[0].path}>
                        <ListItemText
                          className={isOrarion(title)}
                          inset
                          primary={path[0].title}
                        />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link href={path[1].path}>
                        <ListItemText
                          className={isOrarion(title)}
                          inset
                          primary={path[1].title}
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            );
          else if (title === "Services")
            return (
              <div key={title}>
                <ListItem
                  button
                  className={classes.itemHover}
                  onClick={handleClickServices}
                >
                  {openServices ? (
                    <ExpandLessIcon fontSize="large" style={{ opacity: 0 }} />
                  ) : (
                    <ExpandMoreIcon fontSize="large" style={{ opacity: 0 }} />
                  )}
                  <ListItemText
                    disableTypography
                    primary={title}
                    className={isOrarion(title)}
                  />
                  {openServices ? (
                    <ExpandLessIcon
                      fontSize="large"
                      style={{ color: `white` }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      fontSize="large"
                      style={{ color: `white` }}
                    />
                  )}
                </ListItem>

                <Collapse in={openServices} timeout="auto" unmountOnExit>
                  <Divider />
                  <List
                    className={classes.subList}
                    component="div"
                    disablePadding
                  >
                    <ListItem button>
                      <Link href={path[0].path}>
                        <ListItemText
                          className={isOrarion(title)}
                          inset
                          primary={path[0].title}
                        />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link href={path[1].path}>
                        <ListItemText
                          className={isOrarion(title)}
                          inset
                          primary={path[1].title}
                        />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link href={path[2].path}>
                        <ListItemText
                          className={isOrarion(title)}
                          inset
                          primary={path[2].title}
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </div>
            );
          else
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
        <MenuIcon fontSize="large" style={{ color: `white`, zIndex: `999` }} />
      </IconButton>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        style={{ marginBottom: "2rem" }}
        // onOpen={toggleDrawer("top", true)}
      >
        {navDrawerList("top")}
      </Drawer>
    </>
  );
};

export default NavDrawer;
