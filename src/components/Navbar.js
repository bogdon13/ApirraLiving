import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  IconButton,
  Hidden,
  Fab,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Link from "next/link";
import theme from "../scripts/theme";
import HideOnScroll from "./HideOnScroll";
import NavDrawer from "./NavDrawer";
import BackToTop from "./BackToTop";

const navLinks = [
  { title: "Home", path: "/" },
  //   { title: "Furniture", path: "/furniture" },
  //   { title: "Building Supplies", path: "/building-supplies" },
  //   { title: "Local Contracting", path: "/local-contracting" },
  //   { title: "Apirra Homes", path: "/apirra-homes" },
  //   { title: "3D Rendering", path: "/3d-rendering" },
  { title: "Products", path: "/about" },
  //   { title: "Services", path: "/about" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
  { title: "ORARION", path: "/orarion" },
];

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    color: "#f1f1f1",
    margin: `auto`,
    textAlign: `center`,
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
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const isOrarion = (link) => {
    if (link === "ORARION") return classes.orarion;
    else return classes.linkText;
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          style={{
            boxShadow: "none",
            background: `${theme.palette.primary.main}`,
          }}
        >
          <Toolbar component="nav">
            <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
              <Link href="/">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  className={classes.itemHover}
                >
                  <Image
                    src="/logo_no_text.png"
                    alt="apirra logo"
                    width={100}
                    height={100}
                  />
                </IconButton>
              </Link>
            </Container>
            <Hidden mdDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => {
                  if (title === "Products" || title === "Services")
                    return (
                      <div key={title}>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          onClick={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Furniture</MenuItem>
                          <MenuItem onClick={handleClose}>
                            Building Supplies
                          </MenuItem>
                        </Menu>
                        <ListItem
                          button
                          className={classes.itemHover}
                          onClick={handleClick}
                        >
                          <ListItemText
                            disableTypography
                            primary={title}
                            className={isOrarion(title)}
                          />
                          <KeyboardArrowDown />
                        </ListItem>
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
              </List>
            </Hidden>
            <Hidden mdUp>
              <NavDrawer navLinks={navLinks} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};
export default Navbar;
