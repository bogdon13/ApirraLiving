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
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Link from "next/link";
import theme from "../scripts/theme";
import HideOnScroll from "./HideOnScroll";
import NavDrawer from "./NavDrawer";
import BackToTop from "./BackToTop";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Furniture", path: "/furniture" },
  { title: "Building Supplies", path: "/building-supplies" },
  { title: "Local Contracting", path: "/local-contracting" },
  { title: "Apirra Homes", path: "/apirra-homes" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
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
  orarion: {
    margin: `auto`,
    color: `${theme.palette.orarion.main}`,
    fontFamily: "Book Antigua, serif",
    textAlign: `center`,
    fontSize: `large`,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          style={{
            boxShadow: "none",
            background: { background: `${theme.palette.primary.main}` },
          }}
        >
          <Toolbar component="nav">
            <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
              <Link href="/">
                <IconButton edge="start" color="inherit" aria-label="home">
                  <Image
                    src="/logo_no_text.png"
                    alt="apirra logo"
                    width={100}
                    height={100}
                  />
                </IconButton>
              </Link>
              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <Link href={path} key={title}>
                      <ListItem button>
                        <ListItemText
                          primary={title}
                          className={classes.linkText}
                        />
                      </ListItem>
                    </Link>
                  ))}
                  <Link href="/orarion" key="Orarion">
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        primary="ORARION"
                        className={classes.orarion}
                      />
                    </ListItem>
                  </Link>
                </List>
              </Hidden>
              <Hidden mdUp>
                <NavDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
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
