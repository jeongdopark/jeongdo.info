// import { css } from "styled-components";

interface Size {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
}

const SIZE: Size = {
  xsmall: "480px",
  small: "670px",
  medium: "850px",
  large: "1280px",
};

export const DEVICE = {
  xsmall: `(max-width : ${SIZE.xsmall})`,
  small: `(max-width : ${SIZE.small})`,
  medium: `(max-width : ${SIZE.medium})`,
  large: `(max-width : ${SIZE.large})`,
};

// export const MEDIA = {
//   small: (strings: TemplateStringsArray, ...args: any[]) => css`
//     @media (max-width: ${DEVICE.small}) {
//       ${css(strings, ...args)};
//     }
//   `,
//   medium: (strings: TemplateStringsArray, ...args: any[]) => css`
//     @media (max-width: ${DEVICE.medium}) {
//       ${css(strings, ...args)};
//     }
//   `,
//   large: (strings: TemplateStringsArray, ...args: any[]) => css`
//     @media (max-width: ${DEVICE.large}) {
//       ${css(strings, ...args)};
//     }
//   `,
// };
