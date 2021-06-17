import styled, { css, CSSProperties } from 'styled-components';
import { Palette } from 'globals/theme';

export interface Input {
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  size?: string;
  align?: CSSProperties['textAlign'];
  color?: keyof Palette;
}

export const Input = styled.input.attrs(() => ({
  autoComplete: 'off',
  spellCheck: false,
}))<Input>`
  ${({ height, width, margin, padding, size, align, color }) => css`
    border: 1px solid rgba(160, 160, 160, 0.3);
    border-radius: 0.36rem;
    width: ${width ?? '100%'};
    height: ${height ?? '2rem'};
    ${margin && `margin: ${margin};`}
    padding: ${padding ?? '1rem'};
    font-size: ${size ?? '1rem'};
    ${align && `text-align:${align};`}
    ${color && `color:${color};`}
    &::placeholder {
      opacity: 0.5;
    }
  `}
`;
