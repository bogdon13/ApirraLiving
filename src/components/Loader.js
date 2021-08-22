import { makeStyles } from "@material-ui/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import theme from "../scripts/theme";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    background: `${theme.palette.secondary.main}`,
  },
  loader: {
    zIndex: "999",
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <>
      <LinearProgress />
    </>
  );
};

export default Loader;
