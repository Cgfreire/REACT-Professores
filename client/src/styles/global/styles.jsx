import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --bg-default: whitesmoke;
        --primary: #8257e5;
        --valid-bg: #57e57b;
        --invalid-bg: #e55757;
        --containers-bg: white;
        --label: #353535;
        --border-color: lightgray;
        --outline-color: gray;
    }

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%
    }

    body{
        background-image: url("https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg?3 ");
        background-repeat: no-repeat;
        background-size:100%;
        position: relative;
        height: 100vh;
        width: 100vw;
        font-family: 'Poppins', 'Raleway', sans-serif;
    }
`;