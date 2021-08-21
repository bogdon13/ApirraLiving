import Image from "next/image";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
      {/* <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <div className={classes.attentionGrabber}>
            <Typography variant="h1">Apirra Living</Typography>
            <Typography>Buy better. Build better. Be better.</Typography>
          </div>
        </Grid>
      </Grid> */}
      <div className={classes.attentionGrabber}>
        <Typography variant="h1">Apirra Living</Typography>
        <Typography>Buy better. Build better. Be better.</Typography>
      </div>
    </div>
  );
};

export default Flagship;
