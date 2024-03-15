"use client";

// Style
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme.typography = {
  ...theme.typography,
  subtitle2: {
    fontSize: "1rem",
    "@media (max-width:768px)": {
      fontSize: ".5rem",
    },
  },
};
theme = responsiveFontSizes(theme);

const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Theme;
