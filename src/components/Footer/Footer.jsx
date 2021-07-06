import React from 'react';
import { acessGitHub, acessLinkedIn, acessInstagram } from '../../Social';

import {
    FooterContainer,
    FooterSpan,
    FooterIcons,
    Icons
} from '../../styles/components/Footer/styles';

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const footerVariants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
}

const footerTransition = { 
    duration: 1,
    delay: 0.4,
    type: "tween",
    ease: "easeInOut"
}

export default function Footer() {
    
    return (
        <FooterContainer
            initial="out"
            animate="in"
            exit="out"
            variants={ footerVariants } 
            transition={ footerTransition }
        >
            <FooterSpan>&copy; { new Date().getFullYear() } Rauan Camozzi</FooterSpan>
                <FooterIcons>
                    <Icons><FiGithub onClick={ acessGitHub } /></Icons>
                    <Icons><FiLinkedin onClick={ acessLinkedIn } /></Icons>
                    <Icons><FiInstagram onClick={ acessInstagram } /></Icons>
                </FooterIcons>
        </FooterContainer>
    );
}