import { appWindow } from '@tauri-apps/api/window';
import { useState, useEffect } from "react";

import styled from "styled-components";

import {
    ControlMinimize,
    ControlResize,
    ControlClose
} from '../assets/icons.svg';


const Container = styled.div`
    width: 100%;
    background-color: #212528;
    //title-bar
    div#title-bar {
        width: 100%;
        height: 44px;
        display: flex;
        #mouseMove {
            width: calc(100% - 132px);
            display: flex;
            align-items: center;
            padding: 0 20px;

            #logo {
                color: #E39B1F;
                font-weight: bold;
            }
        }
        button {
            width: 44px;
            height: 44px;
            border: none;
            color: #ffffff;
            font-weight: bold;
            background-color: transparent;
            transition: background-color 0.4s;
            &:hover {
                background-color: rgba(225, 225, 225, 0.11);
            }
        }
    }
    //nav-menu
    nav#menu {
        width: 100%;
        height: 60px;
        padding: 0 20px;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            align-items: flex-end;
            list-style: none;
            li {
                margin-right: 20px;
                padding: 4px;
                border-bottom: solid 2px transparent;
                &:hover {
                    border-color: #E39B1F;
                }
                a {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #ffffff;
                    text-decoration: none;
                }
                .active {
                    color: #E39B1F;
                }
            }
        }
    }
`;


const Header = () => {
    //indentificar_pagina_selecionada
    const [activeLink, setActiveLink] = useState<string>(window.location.pathname);

    useEffect(() => {
      const handleLocationChange = () => {
        setActiveLink(window.location.pathname);
      };
  
      window.addEventListener('popstate', handleLocationChange);
  
      return () => {
        window.removeEventListener('popstate', handleLocationChange);
      };
    }, []);

    //controles_de_redimensionamento_das_janelas
    const handleMinimize = () => appWindow.minimize(); //MinimizeWindow
    const handleResize = () => appWindow.toggleMaximize(); //ResizeWindow
    const handleClose = () => appWindow.close(); //CloseWindow(hide)
    const handleMove = () => appWindow.startDragging(); //MoveWindow

    return (
        <Container>
            <div id="title-bar">
                <div id="mouseMove" onMouseDown={handleMove}>
                    <p id="logo">Food Station</p>
                </div>
                <button id="btnClose" onClick={handleMinimize}><ControlMinimize /></button>
                <button id="btnClose" onClick={handleResize}><ControlResize/></button>
                <button id="btnClose" onClick={handleClose}><ControlClose /></button>
            </div>
            <nav id="menu">
                <ul>
                    <li><a href="/" className={activeLink === '/' ? 'active' : ''}>Home</a></li>
                    <li><a href="/form" className={activeLink === '/form' ? 'active' : ''}>Form</a></li>
                </ul>
            </nav>
        </Container>
    )
}


export default Header;