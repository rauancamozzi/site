import React from 'react';

import { Link } from 'react-router-dom';

import { NavMenuContainer, NavList, NavLink } from './styles';

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.4 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link to="/sobre">Sobre</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 1, duration: 0.4 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.4, duration: 0.05 },
            },
          }}
        >
          <Link to="/portfolio">Portfolio</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 1.2, duration: 0.4 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.6, duration: 0.05 },
            },
          }}
        >
          <Link to="/contato">Contato</Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}