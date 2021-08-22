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
    background: `${theme.palette.primary.main}`,
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
    WebkitTransform: "translate(-50%, -50%)",
  },
  contactButton: {
    border: "none",
    "&:hover": {
      border: "none",
      backgroundColor: `${theme.palette.standard.main}`,
      color: `${theme.palette.primary.main}`,
    },
  },
});

const Flagship = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <video autoPlay playsInline muted loop className={classes.background}>
        <source src="/apirra-background.mp4" type="video/mp4" />
      </video>
      <div className={classes.attentionGrabber}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h1">Apirra Living</Typography>
          <Typography paddingTop={2} paddingBottom={3} variant="h5">
            Buy better. Build better. Be better.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            className={classes.contactButton}
            color="standard"
          >
            Click to Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flagship;
