import Image from "next/image";
import { Typography, Button, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../scripts/theme";
import Link from "next/link";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1,
    background: `#000`,
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
    "@media (max-width:800px)": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.standard.main}`,
    },
  },
});

const Flagship = () => {
  const classes = useStyles();
  const Video = () => (
    // <video autoPlay playsInline muted loop className={classes.background}>
    //   <source src="/apirra-background.mp4" type="video/mp4" />
    // </video>

    // Works for Daven's iPhone 7
    <div
      dangerouslySetInnerHTML={{
        __html: `<video autoplay playsinline muted loop style="position: fixed;
        right: 0;
        bottom: 0;
        minWidth: 100%;
        minHeight: 100%;
        filter: brightness(30%);
        zIndex: -1;">
        <source src="/apirra-background.mp4" type="video/mp4" />
      </video>`,
      }}
    ></div>
  );
  const AttentionGrabber = () => {
    return (
      <>
        <Video />
        <div className={classes.attentionGrabber}>
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 2000 }}
          >
            <div style={{ textAlign: "center" }}>
              <Typography variant="h1">Apirra Living</Typography>
              <Typography
                style={{ whiteSpace: "nowrap" }}
                paddingTop={2}
                paddingBottom={3}
                variant="h3"
              >
                Buy better. Build better. Be better.
              </Typography>
              <Link href="/about">
                <Button
                  variant="outlined"
                  className={classes.contactButton}
                  color="standard"
                >
                  <Typography variant="h4">Learn More</Typography>
                </Button>
              </Link>
            </div>
          </Grow>
        </div>
      </>
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      {/* <Loader className={classes.loader} /> */}
      <AttentionGrabber />
    </div>
  );
};

export default Flagship;
