import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { acessGitHub, acessLinkedIn, acessInstagram } from "../../Social";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

import { MenuToggle } from "./MenuToggle";
import { NavMenu } from "./NavMenu";

import headerImage from "../../assets/rauan-brand-white.svg";

import {
  HamburguerMenuContainer,
  MenuContainer,
  ContentContainer,
} from "./styles";

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const HeaderMenu = styled(motion.div)`
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 35px;

    display: block;

    transition: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FooterMenu = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const FooterIcons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Icons = styled.div`
  color: var(--gray-300);
  transition: all 250ms ease-in-out;
  font-size: 1.2rem;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
        
  }
      
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    
  }
      
  @media only screen and (min-width: 320px) and (max-width: 480px) {
      font-size: 1rem;
  }

  &:hover {
    color: var(--gray-500);
    cursor: pointer;
  }
`;

const FooterSpan = styled(motion.span)`
  font: 400 1rem Lexend, sans-serif;
  color: var(--gray-300);
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const menuVariants = {
  open: {
    transform: "translateY(0%)",
  },
  closed: {
    transform: "translateY(-110%)",
  },
};

const menuTransition = {
  type: "tween",
  duration: 1.2,
};

const commonVariantsHeader = {
  show: {
    transform: "translateY(0em)",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  hide: {
    transform: "translateY(-5em)",
    opacity: 0,
  },
};

const commonVariantsFooter = {
  show: {
    transform: "translateY(0em)",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  hide: {
    transform: "translateY(5em)",
    opacity: 0,
  },
};

const commonVariantsSocial = {
  show: {
    transform: "translateY(0em)",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  hide: {
    transform: "translateY(5em)",
    opacity: 0,
  },
};

const commonVariantsSpan = {
  show: {
    transform: "translateY(0em)",
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
  hide: {
    transform: "translateY(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 1 };

export default function Menu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburguerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
          <HeaderMenu
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariantsHeader}
            transition={commonTransition}
          >
            <Link to="/" onClick={toggleMenu}>
              <img src={headerImage} alt="Image do Header" />
            </Link>
          </HeaderMenu>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} toggle={toggleMenu} />
        </ContentContainer>
        <BottomContainer>
          <FooterMenu
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariantsFooter}
            transition={commonTransition}
          >
            <FooterIcons
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={commonVariantsSocial}
              transition={commonTransition}
            >
              <Icons>
                <FiGithub onClick={acessGitHub} />
              </Icons>
              <Icons>
                <FiLinkedin onClick={acessLinkedIn} />
              </Icons>
              <Icons>
                <FiInstagram onClick={acessInstagram} />
              </Icons>
            </FooterIcons>

            <FooterSpan
              initial={false}
              animate={isOpen ? "show" : "hide"}
              variants={commonVariantsSpan}
              transition={commonTransition}
            >
              &copy; {new Date().getFullYear()} Rauan Camozzi
            </FooterSpan>
          </FooterMenu>
        </BottomContainer>
      </MenuContainer>
    </HamburguerMenuContainer>
  );
}
