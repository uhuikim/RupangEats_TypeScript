import styled, { css, CSSProperties } from 'styled-components/macro';
import { Palette } from 'globals/theme';

interface Div {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  flex?: CSSProperties['flex'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  backgroundColor?: keyof Palette;
}

interface Flex {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
}

interface Text {
  size?: CSSProperties['fontSize'];
  bold?: boolean;
  color?: CSSProperties['color'];
  align?: CSSProperties['textAlign'];
  margin?: CSSProperties['margin'];
}

export const Div = styled.div<Div>`
  ${({ theme, width, height, flex, margin, padding, backgroundColor }) => css`
    ${width && `width:${width};`}
    ${height && `height:${height}`}
    ${flex && `flex:${flex}`}
    ${margin && `margin:${margin}`}
    ${padding && `padding:${padding}`}
    ${backgroundColor && `backgroundColor:${theme[backgroundColor]}`}
  `}
`;

export const Flex = styled(Div)<Flex>`
  ${({ align, justify, direction, wrap }) => css`
    display: flex;
    ${align && `align-items: ${align};`}
    ${justify && `justify-content: ${justify};`}
    ${direction && `flex-direction: ${direction};`}
    ${wrap && `flex-wrap: ${wrap};`}
  `}
`;

export const Text = styled.div<Text>`
  ${({ align, color, bold, size, margin }) => css`
    font-weight: ${bold ? '700' : '500'};
    ${size && `font-size: ${size}`};
    ${margin && `margin: ${margin};`}
    ${color && `color: ${color};`}
    ${align && `text-align: ${align};`}
  `}
`;
