import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#e5ffff",
      main: "#1e6cae",
      dark: "#82ada9",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#82ada9",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

export default theme;
