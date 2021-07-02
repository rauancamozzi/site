import styled from "styled-components";
import { motion } from 'framer-motion';

export const HamburguerMenuContainer = styled.div`
  display: none;
  

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`;

export const HamburguerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

export const MenuContainer = styled(motion.div)`
  width: 100vw;
  height: 100%;
  background-color: var(--gray-900);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.8rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 200px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    gap: 100px;
  }
`;

export const NavLink = styled(motion.li)`
  font-weight: 700;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--gray-300);
    font-size: 4rem;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: var(--gray-500);
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    a {
      font-size: 2.4rem;
    }
  }
`;




