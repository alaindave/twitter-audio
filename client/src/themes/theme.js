import { createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Gilroy-Medium"',
    fontSize: 13.5
  },
  error: "#d8000c",
  bgcolor: "#f6f6f6",

  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff", // white
      dark: "#bfbfbf"
    },
    secondary: {
      light: "#ffffff",
      main: "#3956E1", // blue
      dark: "#1b34ab",
      contrastText: "#ffffff"
    }
  }
});

export const StyledButton = withStyles({
  root: {
    color: "white",
    textTransform: "none",
    fontSize: "15px",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2)
  },
  label: {}
})(Button);
