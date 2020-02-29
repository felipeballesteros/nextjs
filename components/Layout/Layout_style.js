import { createGlobalStyle } from 'styled-components'

export const LayoutStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        font-family: 'Montserrat', sans-serif;
        background-color: #e3e3e3;
        padding: 10px;
        margin:0;
        box-sizing: content-box;

        a{
            padding: 5px;
        }

        .links {

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            
            li {
                font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
                border-bottom: 1px solid #ccc;
            }
            
            li:last-child {
                border: none;
            }
            
            li a {
                text-decoration: none;
                color: #000;
                display: block;
            
                -webkit-transition: font-size 0.2s ease, background-color 0.2s ease;
                -moz-transition: font-size 0.2s ease, background-color 0.2s ease;
                -o-transition: font-size 0.2s ease, background-color 0.2s ease;
                -ms-transition: font-size 0.2s ease, background-color 0.2s ease;
                transition: font-size 0.2s ease, background-color 0.2s ease;
            }
            
            li a:hover {
                font-size: 30px;
                background: #f6f6f6;
            }
        }

        .card {
            min-width: 400px;
            background-color: #fff;
            background: linear-gradient(#f8f8f8, #fff);
            box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            margin-top: 1.5rem;
            font-size: 2.3vw;
        
            h1 {
                text-align: center;
            }

            .additional {
                position: relative;
                height: 100%;
                width: 40%;
                background: linear-gradient(#dE685E, #EE786E);
                overflow: hidden;
                z-index: 2;
                line-height: 0;
            }

            .additional img{
                width: 100%;
                height:100%;
            }

            .general {
                width: 60%;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 1;
                box-sizing: border-box;
                padding: 1rem;
                padding-top: 0;
            }
        }
    }
`;