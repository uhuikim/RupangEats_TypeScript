import { platform } from "process";
import React from "react";

import { ThemeProvider } from "styled-components";

export const palette = {
  white: "#ffffff",
  whiteGray: "#f2f2f2",
  blackGray: "#393e46",
  subBlack: "#222831",
  black: "#000000",
  main: "#FF0014",
  mainLight: "#FF7A85",
  mainDark: "#A80F1B",
  sub: "#FFBE32",
  subLight: "#FFE2A3",
  subDark: "#C38600",
  textPrimary: "#202020",
  textSecondary: "#707070",
  textDisabled: "#b0b0b0",
  textError: "#FF4343",
  textSuccess: "#3864FF",
  bgStep0: "#FFFFFF",
  bgStep1: "#f6f6f6",
  bgDimd: "rgba(32,32,32,0.6)",
  dividers: "#EEEEEE",
  btnDefault: "#DEDEDE",
  border: "#BBBBBB",
};

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={palette}>{children}</ThemeProvider>;
}

export type Palette = typeof palette;

export { StyledThemeProvider as ThemeProvider };
