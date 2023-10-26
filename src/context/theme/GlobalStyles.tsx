import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


*, *:before, *:after {
    box-sizing: border-box;
    line-height: calc(1em + 0.725rem);
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto;
    font-weight: 400;  
    margin: 0;
    padding: 0;
  }

  main {  
    max-width: 1280px;
    width: 100%;
    margin: 50px auto;
    
    .scroll-lock {
      overflow-y: hidden;
    }
  }
  
  a {
    text-decoration: none !important;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600; 
  }
 
  a:hover {
    color: ${({ theme }) => theme.colors.text};;
  }
  a, p {
    font-size: 1rem;
  }

  h1,h2,h3,h4, h5, h6, p {
    scroll-margin-top: 128px;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    line-height: 160%;
  }
 
`;

export default GlobalStyles;
