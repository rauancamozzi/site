import styled from "styled-components";
import { motion } from 'framer-motion';

export const HamburguerMenuContainer = styled.div`
  display: flex;
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
  background-color: black;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  user-select: none;
  padding: 1em 2.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
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
`;




