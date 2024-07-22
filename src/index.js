import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';



const GlobalStyle =createGlobalStyle`

@font-face {
font-family:"aaaiight"
src: url("./font/aaaiight.ttf?iefix")format("treutype")}

body{
font-family:"aaaiight"
}

*{
margin:0;
padding:0;
box-sizing:border-box;
background:lavender;
}

a{
text-decoration:none;
}
li{
list-style:none;
}


`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <GlobalStyle/>
    <App />
 </BrowserRouter>
);

