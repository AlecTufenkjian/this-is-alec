import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root{
    --rich-black: #0e1e25;
    --gunmetal: #938581;
    --white: #ffffff;
    --black: #000000;
    --steel-teal: #80CED7;
    --mountain-meadow: #F7EF99; 
    --dark-gray: #2F2F2F;
    --gray: #888;
  }

  html{
    font-size: 10px;
    font-family: 'RobotoMono Regular';
    background-color: var(--dark-gray);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    object-fit: cover;
  }

  svg{
    height: 100%;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .home-container {
    margin-top: 65px;
  }

  ::-webkit-scrollbar {  
    width: 3px;
  }

  ::-webkit-scrollbar-track{
    background: white;
  }

  ::-webkit-scrollbar-thumb{
    background: var(--gray);
  }

`;
export default GlobalStyles;
