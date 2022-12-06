import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    :root {
        overflow: overlay;
        color: red;
        font-size: ${p => p.theme['size-200']};

    }
    html {
        scroll-behavior: smooth;
    }
    code {
        background: linear-gradient(45deg, #3f51b5, #673ab7);
        color: white;
        padding: 1rem;
        margin: 1rem 0;
        display: block;
    }
    html,
    body,
    #__next {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    body {
        background: ${p => p.theme['body-bg']};
        color: ${p => p.theme['body-text']};
        font-family: ${({theme}) => theme['paragraph-family']};
        font-weight: ${p => p.theme['body-weight']};
    }
    h1, h2, h3, h4, h5, h6, p, b, a {
        font-family: unset;
        color: inherit;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
    ::-webkit-scrollbar {
        width: .25rem;
        height: .25rem;
    }
    ::-webkit-scrollbar-track {
        background: white;
    }
    ::-webkit-scrollbar-thumb {
        background-color:  #eb6440; 
        border-radius: .5rem;
    }
    input {
        height: 100%;
        font: inherit;
        border: unset;
        background: transparent;
    }
    input:focus {
        outline: unset;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: unset;
        -webkit-text-fill-color: inherit;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    }
`