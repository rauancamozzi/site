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
                    Sou Rauan Camozzi, tenho 22 anos e moro em Campinas, 
                    São Paulo. Desde 2019, tenho muito interesse na área da 
                    programação, ultimamente tenho estudado bastante sozinho 
                    com o intuito de aprender novas tecnologias e ferramentas, para  
                    me especializar em Desenvolvimento Frontend.
                </AboutText>
                <AboutText>
                    Comecei a desenhar desde muito jovem e atualmente é um dos
                    meu hobbies, a maioria das minhas habilidades e conhecimento de 
                    design são autoditadas. No futuro, desejo aprender mais sobre 
                    UI/UX Design, para construir interfaces de usuário e sites 
                    elegantes e profissionais.
                </AboutText>
                <AboutSubtitle>Formação acadêmica</AboutSubtitle>
                <AboutText>
                    Iniciei em 2019 e me formei como Técnico em Desenvolvimento
                    de Sistemas pelo SENAI em 2020, onde programei muito em Java, com
                    orientação para objetos e desenvolvimento para Android, mas o 
                    Desenvolvimento Web com HTML, CSS e JavaScript me despertaram 
                    mais interesse, desde então, tenho me dedicado a aprender React.
                </AboutText>
            </AboutSection>
            <AboutImage src={ aboutImage } alt="Imagem da Página Sobre" />
        </AboutContainer>
    );
}