import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(./fonts/Calopsita/Roboto-Regular.ttf) format('truetype');
  }
  
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
  body {
    background: #F1F1F1;
  }
  .app-container {
    height: 100vh;
    width: 100vw;
  }
  .body-container {
    width: 100%;
    height: calc(100% - 128px);
    overflow-y: auto;
    padding: 0 10px;
  }
`;

export default GlobalStyle;