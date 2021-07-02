import React from 'react';
import { acessGitHub, acessLinkedIn, acessInstagram } from '../../Social';

import {
    FooterContainer,
    FooterSpan,
    FooterIcons,
    Icons
} from '../../styles/components/Footer/styles';

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
    
    return (
        <FooterContainer>
            <FooterSpan>&copy; { new Date().getFullYear() } Rauan Camozzi</FooterSpan>
                <FooterIcons>
                    <Icons><FiGithub onClick={ acessGitHub } /></Icons>
                    <Icons><FiLinkedin onClick={ acessLinkedIn } /></Icons>
                    <Icons><FiInstagram onClick={ acessInstagram } /></Icons>
                </FooterIcons>
        </FooterContainer>
    );
}