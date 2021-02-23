import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Muli",
      "\"system-ui\"",
      "BlinkMacSystemFont",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "\"sans-serif\"",
    ],
  },
  palette: {
    notImportant: {
      light: grey.A400,
      main: grey.A400,
      dark: grey.A700
    }
  }
});

export default theme;
