import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
    HeaderContainer,
    Logo,
    NavbarMenu,
    NavbarLinks
} from '../../styles/components/Header/styles';

import Menu from '../Menu';

import { NavBarItems } from '../../NavBarItems';

import brandImage from '../../assets/logo.svg';

import '../../styles/components/Header/styles.css';

const headerVariants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
}

const headerTransition = { 
    duration: 1,
    delay: 0.4,
    type: "tween",
    ease: "easeInOut"
}

export default function Header() {
    return (
        <HeaderContainer
            initial="out"
            animate="in"
            exit="out"
            variants={ headerVariants } 
            transition={ headerTransition }
        >
            <Link to="/">
                <Logo src={ brandImage } alt="Logo" />
            </Link>

            <Menu />
            
            <NavbarMenu>
                {
                    NavBarItems.map((item, index) => {
                        return (
                            <NavbarLinks key={ index }>
                                <NavLink
                                    to={ item.url }
                                    className={ item.class }
                                    activeClassName="link-selected"
                                >
                                    { item.title }
                                </NavLink>
                            </NavbarLinks>
                        );
                    })
                }
            </NavbarMenu>
        </HeaderContainer>
    );

}