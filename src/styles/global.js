import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'MICEGothic Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #F0F0F0;
    font-family: 'MICEGothic Bold';
    color: black;
    height: 100%;
    margin-bottom: 50px;
}
img{
    width: 300px;
    height: 400px;
    object-fit: cover;
  
}
a{
    text-decoration: none;
    color: black;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
input, button{
    border:none;
    background-color: #F0F0F0;
    white-space: nowrap;
}
input:focus,
input:active,
button:focus,
button:active {
  outline: none;
  box-shadow: none;
}
div {
    white-space: nowrap;
}
`;

export default GlobalStyle;
