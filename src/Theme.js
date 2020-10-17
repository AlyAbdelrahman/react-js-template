import { createMuiTheme } from "@material-ui/core/styles";

// Ex.
// primary colors
// const primaryColorCode = {
//   main: "#FFFF",
//   sub1: "#FFFF",
//   sub2: "#FFFF",
//   sub3: "#FFFF",
//   sub4: "#FFFF",
//   sub5: "#FFFF",
//   sub6: "#FFFF",
//   light: "#FFFF",
// };
// // secondry colors
// const secondaryColorCodes = {
//   main: "#323534",
//   sub1: "#FFFF",
//   sub2: "#FFFF",
//   sub3: "#FFFF",
//   sub4: "#FFFF",
//   sub5: "#FFFF",
//   sub6: "#FFFF",
//   light: "#FFFF",
// };

// const textColor = {
//   main: "#32354",
//   sub1: "#FFFF",
//   sub2: "#FFFF",
//   sub3: "#FFFF",
//   sub4: "#FFFF",
//   sub5: "#FFFF",
//   sub6: "#FFFF",
//   light: "#FFFF",
// };
const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1400,
      xl: 1920,
    },
  },
//   palette: {
//     common: {
//     //   white: "#fffff",
//     //   black: "#0000",
//     },
//     primary: {},
//     secondary: {},
//     // text: {...textColor}
//     // custom: {}
//   },
//   typography: {
//   },
//   //shadows : [],
//   spacing: 8,
//   overrides: {
//     //   MuiDialog: {}
//   }
});
export default theme;