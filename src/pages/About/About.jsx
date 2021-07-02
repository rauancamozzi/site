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
                <AboutText>
                    Sou Rauan Camozzi, tenho 22 anos e moro em Campinas, 
                    São Paulo. Desde 2019,<br /> tenho muito interesse na área da 
                    programação, ultimamente tenho estudado<br /> bastante sozinho 
                    com o intuito de aprender novas tecnologias e ferramentas, para <br /> 
                    me especializar em Desenvolvimento Frontend.
                </AboutText>
                <AboutText>
                    Comecei a desenhar desde muito jovem e atualmente é um dos
                    meu hobbies, a maioria<br /> das minhas habilidades e conhecimento de 
                    design são autoditadas. No futuro, desejo<br /> aprender mais sobre 
                    UI/UX Design, para construir interfaces de usuário e sites 
                    elegantes<br /> e profissionais.
                </AboutText>
                <AboutSubtitle>Formação acadêmica</AboutSubtitle>
                <AboutText>
                    Iniciei em 2019 e me formei como Técnico em Desenvolvimento
                    de Sistemas pelo SENAI<br /> em 2020, onde programei muito em Java, com
                    orientação para objetos e desenvolvimento<br /> para Android, mas o 
                    Desenvolvimento Web com HTML, CSS e JavaScript me despertaram<br /> 
                    mais interesse, desde então, tenho me dedicado a aprender React.
                </AboutText>
            </AboutSection>
            <AboutImage src={ aboutImage } alt="Imagem da Página Sobre" />
        </AboutContainer>
    );
}