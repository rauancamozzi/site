import React from 'react';
import { Link } from 'react-router-dom';
import { 
    HeaderContainer,
    Logo,
    NavbarMenu,
    NavbarLinks
} from '../../styles/components/Header/styles';

import Menu from '../Menu';

import brandImage from '../../assets/logo.svg';

const headerVariants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
}

const headerTransition = { 
    duration: 1,
    delay: 0.2,
    type: "tween",
    ease: "easeInOut"
}

export default function Header() {
    return (
        <HeaderContainer
            initial="out"
            animate="in"
            variants={ headerVariants } 
            transition={ headerTransition }
        >
            <Link to="/">
                <Logo src={ brandImage } alt="Logo" />
            </Link>

            <Menu />
            
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