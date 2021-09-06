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

theme.typography.h1 = {
  fontSize: "5rem",
  fontWeight: 500,
  "@media (min-width:600px)": {
    fontSize: "7rem",
  },
  "@media (max-width:300px)": {
    fontSize: "3rem",
  },
};
theme.typography.h2 = {
  fontSize: "2.5rem",
  fontWeight: 500,
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  "@media (max-width:300px)": {
    fontSize: "2rem",
  },
};
theme.typography.h3 = {
  fontSize: "1.3rem",
  fontWeight: 500,
  "@media (min-width:600px)": {
    fontSize: "1.7rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

theme.typography.h6 = {
  fontSize: "5rem",
  fontFamily: "Arial Black",
  "@media (min-width:590px)": {
    fontSize: "9rem",
  },
  "@media (max-width:420px)": {
    fontSize: "3.5rem",
  },
  "@media (max-width:300px)": {
    fontSize: "3rem",
  },
};

export default theme;
