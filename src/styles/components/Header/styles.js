import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 90vw;
  height: auto;

  margin-top: 32px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 16px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 16px;
  }
`;

export const Logo = styled.img`
  width: 48px;
  height: 35px;

  display: block;

  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 38px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 38px;
  }
`;

export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);

  font: 600 1.1rem Lexend, sans-serif;

  list-style: none;
  text-align: center;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const NavbarLinks = styled.li`
  display: inline-block;

  text-decoration: none;
  text-align: center;

  color: var(--gray-500);

  padding-left: 3.4rem;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--gray-800);
    cursor: pointer;
  }
`;
