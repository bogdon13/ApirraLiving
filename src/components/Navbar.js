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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Link from "next/link";
import theme from "../scripts/theme";
import HideOnScroll from "./HideOnScroll";
import NavDrawer from "./NavDrawer";
import BackToTop from "./BackToTop";

const navLinks = [
  { title: "Home", path: "/" },
  {
    title: "Products",
    path: [
      { title: "Furniture", path: "/furniture" },
      { title: "Building Supplies", path: "/building-supplies" },
    ],
  },
  {
    title: "Services",
    path: [
      { title: "Apirra Homes", path: "/apirra-homes" },
      { title: "Local Contracting", path: "/local-contracting" },
      { title: "3D Rendering", path: "/rendering" },
    ],
  },
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
  anchor: {
    display: "hidden",
  },
});

const Navbar = () => {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [openProducts, setopenProducts] = React.useState(false);
  const [openServices, setopenServices] = React.useState(false);

  const handleClick1 = (event) => {
    setopenProducts(true);
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setopenServices(true);
    setAnchorEl2(event.currentTarget);
  };
  const handleClose1 = () => {
    setopenProducts(false);
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setopenServices(false);
    setAnchorEl2(null);
  };
  const classes = useStyles();
  const isOrarion = (link) => {
    if (link === "ORARION") return classes.orarion;
    else return classes.linkText;
  };

  return (
    <>
      {/* <HideOnScroll> */}
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
                  width={75}
                  height={75}
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
                if (title === "Products")
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
                        {openProducts ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </ListItem>
                    </div>
                  );
                if (title === "Services")
                  return (
                    <div key={title}>
                      <Menu
                        id="simple-menu2"
                        anchorEl={anchorEl2}
                        keepMounted
                        open={Boolean(anchorEl2)}
                        onClose={handleClose2}
                        onClick={handleClose2}
                      >
                        <Link href={path[0].path}>
                          <MenuItem>{path[0].title}</MenuItem>
                        </Link>
                        <Link href={path[1].path}>
                          <MenuItem>{path[1].title}</MenuItem>
                        </Link>
                        <Link href={path[2].path}>
                          <MenuItem>{path[2].title}</MenuItem>
                        </Link>
                      </Menu>
                      <ListItem
                        button
                        className={classes.itemHover}
                        onClick={handleClick2}
                      >
                        <ListItemText
                          disableTypography
                          primary={title}
                          className={isOrarion(title)}
                        />
                        {openServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
      {/* </HideOnScroll> */}
      <div id="back-to-top-anchor" className={classes.anchor} />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};
export default Navbar;
