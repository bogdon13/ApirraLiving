import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#071928",
    },
    secondary: {
      main: "#D6B53B",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
