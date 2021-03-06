import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
      outline:0;
  }

  html, body, #root {
    background: linear-gradient(-90deg, #0c2461, #6a89cc);
    height:100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Roboto',Arial, Helvetica, sans-serif;
  }

  a{
      text-decoration:none;
  }

  ul{
    list-style:none;
  }
  button {
    cursor: pointer;
  }

`;
