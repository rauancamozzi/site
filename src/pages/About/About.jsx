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

const containerVariants = {
    in: { opacity: 1 },
    out: { opacity: 0 },
}
  
const containerTransition = {
    duration: 0.6,
    delay: 0.4,
    type: "tween",
    ease: "easeInOut"
}

export default function About() {
    return (
        <AboutContainer
            initial="out"
            animate="in"
            exit="out"
            variants={ containerVariants }
            transition={ containerTransition }
        >
            <AboutSection>
                <AboutTitle>Um pouco sobre mim</AboutTitle>
                <AboutText>
                Descobri a minha paixão e interesse na programação e na área de tecnologia 
                como um todo em 2018, desde então venho estudando para aprender novas 
                tecnologias e ferramentas, com o foco de me especializar em desenvolvimento 
                Front-end.
                </AboutText>
                <AboutText>
                Um dos meus hobbies é o desenho e design, as minhas habilidades e conhecimentos 
                são autodidatas. Quero estudar UI/UX Design e me qualificar para construir 
                interfaces e sites mais elegantes e profissionais.
                </AboutText>
                <AboutSubtitle>Formação acadêmica</AboutSubtitle>
                <AboutText><b>SENAI</b> <i>(2019-2020)</i></AboutText>
                <AboutText>Técnico em Desenvolvimento de Sistemas</AboutText>
                <br></br>
                <AboutText><b>Wyden</b> <i>(Conclusão prevista para 2024)</i></AboutText>
                <AboutText>Análise e Desenvolvimento de Sistemas</AboutText>
            </AboutSection>
            <AboutImage src={ aboutImage } alt="Imagem da Página Sobre" />
        </AboutContainer>
    );
}