import React from 'react';

import {
    FooterContainer,
    FooterSpan,
    FooterIcons,
    Icons
} from '../../styles/components/Footer/styles';

import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
    function acessGitHub(event) {
        event.preventDefault();
        window.location.href = "https://www.github.com/rauancamozzi";
      }
  
      function acessLinkedIn(event) {
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/rauan-camozzi";
      }
  
      function acessInstagram(event) {
        event.preventDefault();
        window.location.href = "https://www.instagram.com/rauancamozzi";
      }

    return (
        <FooterContainer>
            <FooterSpan>&copy; { new Date().getFullYear() } Rauan Camozzi</FooterSpan>
            <IconContext.Provider value={{ size: '1.4rem' }}>
                <FooterIcons>
                    <Icons><FiGithub onClick={ acessGitHub } /></Icons>
                    <Icons><FiLinkedin onClick={ acessLinkedIn } /></Icons>
                    <Icons><FiInstagram onClick={ acessInstagram } /></Icons>
                </FooterIcons>
            </IconContext.Provider>
        </FooterContainer>
    );
}