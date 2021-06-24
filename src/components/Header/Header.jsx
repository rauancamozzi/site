import React from 'react';
import { Link } from 'react-router-dom';
import { 
    HeaderContainer,
    Logo,
    ResponsiveMenu,
    NavbarMenu,
    NavbarLinks
} from '../../styles/components/Header/styles';

import Menu from '../Menu';

import brandImage from '../../assets/logo.svg';

export default function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo src={ brandImage } alt="Logo" />
            </Link>
            <ResponsiveMenu>
                <Menu />
            </ResponsiveMenu>
            <NavbarMenu>
                <Link to="/sobre">
                    <NavbarLinks>Sobre</NavbarLinks>
                </Link>
                <Link to="/portfolio">
                    <NavbarLinks>Portfolio</NavbarLinks>
                </Link>
                <Link to="/contato">
                    <NavbarLinks>Contato</NavbarLinks>
                </Link>
            </NavbarMenu>
        </HeaderContainer>
    );
}