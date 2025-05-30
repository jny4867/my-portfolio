import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    background-color: #fdfdfd;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;