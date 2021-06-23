import React from 'react';
import aboutImage from '../../assets/about-image.svg';

import {
    AboutContainer,
    AboutSection,
    AboutTitle,
    AboutSubtitle,
    AboutText,
    AboutImage
} from '../../styles/pages/About/styles';

export default function About() {
    return (
        <AboutContainer>
            <AboutSection>
                <AboutTitle>Um pouco sobre mim</AboutTitle>
                <AboutText>Texto sobre mim</AboutText>
                <AboutSubtitle>Formação acadêmica</AboutSubtitle>
                <AboutText>Formação acadêmica</AboutText>
            </AboutSection>
            <AboutImage src={ aboutImage } alt="Imagem da Página Sobre" />
        </AboutContainer>
    );
}