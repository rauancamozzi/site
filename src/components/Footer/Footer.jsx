import React from 'react';
import { acessGitHub, acessLinkedIn, acessInstagram } from '../../Social';

import {
    FooterContainer,
    FooterSpan,
    FooterIcons,
    Icons
} from '../../styles/components/Footer/styles';

import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
    
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