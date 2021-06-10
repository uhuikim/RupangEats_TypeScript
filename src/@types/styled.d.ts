import "styled-components";
import { Palette } from "globals/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Palette {}
}
