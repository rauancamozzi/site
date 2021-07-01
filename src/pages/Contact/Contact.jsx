import React from 'react';
import contactImage from '../../assets/contact-image.svg';

import {
    ContactContainer,
    ContactSection,
    ContactTitle,
    ContactSocial,
    ContactImage
} from '../../styles/pages/Contact/styles';

import { IconContext } from 'react-icons';
import {
    FiGithub,
    FiLinkedin,
    FiAtSign,
    FiInstagram
} from 'react-icons/fi';

export default function Contact() {
    return (
        <ContactContainer>
            <ContactSection>
                <ContactTitle>Contato</ContactTitle>
                <IconContext.Provider value={{ size: '1rem' }}>
                    <ContactSocial>
                        <span><FiAtSign />Email</span>
                        <a href='mailto:rauancamozzi@hotmail.com'>rauancamozzi@hotmail.com</a>
                        
                        <span><FiLinkedin />LinkedIn</span>
                        <a href='https://www.linkedin.com/in/rauan-camozzi'>Rauan Camozzi</a>

                        <span><FiGithub />GitHub</span>
                        <a href='https://www.github.com/rauancamozzi'>rauancamozzi</a>

                        <span><FiInstagram />Instagram</span>
                        <a href='https://www.instagram.com/rauancamozzi'>rauancamozzi</a>
                </ContactSocial>
                </IconContext.Provider>
            </ContactSection>
            <ContactImage src={ contactImage } alt='Imagem da Página Contato' />
        </ContactContainer>
    );
}