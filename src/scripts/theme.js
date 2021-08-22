import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F1827",
      hover: "#182740",
    },
    secondary: {
      main: "#3A5E99",
    },
    orarion: {
      main: "#D6B53B",
    },
    error: {
      main: red.A400,
    },
    standard: {
      main: "#FFF",
    },
  },
});

export default theme;
