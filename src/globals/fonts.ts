import { createGlobalStyle } from "styled-components";

const fonts = [
  {
    family: "Exo 2",
    weight: 100,
    name: "Exo2-Thin",
  },
  {
    family: "Exo 2",
    weight: 400,
    name: "Exo2-Regular",
  },
  {
    family: "Exo 2",
    weight: 700,
    name: "Exo2-Bold",
  },
  {
    family: "Spoqa Han Sans",
    weight: 400,
    name: "SpoqaHanSans-Regular",
  },
  {
    family: "Spoqa Han Sans",
    weight: 700,
    name: "SpoqaHanSans-Bold",
  },
  {
    family: "YeonSung-Regular",
    weight: 400,
    name: "YeonSung-Regular",
  },
  {
    family: "HiMelody-Regular",
    weight: 400,
    name: "HiMelody-Regular",
  },
];

const FontStyles = createGlobalStyle`


${fonts
  .map(
    ({ family, weight, name }) => `
    @font-face {
      font-family: '${family}';
      font-style: normal;
      font-weight: ${weight};
      src: local(${name}), url(/fonts/${name}.woff2) format('woff2');
    }
  `
  )
  .join("")}
`;

export default FontStyles;
