import { createGlobalStyle } from "styled-components";
import { MyThemeProps } from "./theme";
export const GlobalStyleComponent = createGlobalStyle<MyThemeProps>`
body {
  height: 100vh;
  color:${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
      text-decoration:none;
  }
  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;