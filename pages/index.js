import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { makeStyles } from "@material-ui/styles";
import Flagship from "../src/components/Flagship";
import Navbar from "../src/components/Navbar";

const useStyles = makeStyles({
  addPadding: {
    paddingTop: "50px",
  },
  attentionGrabber: {
    color: `white`,
    position: `relative`,
    paddingBottom: `1rem`,
  },
  spacer: {
    width: `100%`,
    height: `10rem`,
  },
  contactButton: {
    color: `white`,
    marginTop: `1rem`,
  },
  mainWindow: {
    minHeight: `95vh`,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Flagship />
      {/* <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-beta example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
    </>
  );
}
