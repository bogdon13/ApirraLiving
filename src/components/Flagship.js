import Image from "next/image";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../scripts/theme";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    filter: "brightness(30%)",
    zIndex: -1,
  },
  container: {
    position: "relative",
  },
  attentionGrabber: {
    color: "#f1f1f1",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const Flagship = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <video autoPlay muted loop className={classes.background}>
        <source src="/apirra-background-compressed.mp4" type="video/mp4" />
      </video>
      <div className={classes.attentionGrabber}>
        <Typography variant="h1">Apirra Living</Typography>
        <Typography paddingTop={2} paddingBottom={3} variant="h5">
          Buy better. Build better. Be better.
        </Typography>
        <Button
          variant="contained"
          size="large"
          disableElevation
          className={classes.contactButton}
          color="secondary"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Flagship;
