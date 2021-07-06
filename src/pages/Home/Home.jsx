import React from "react";
import { acessGitHub, acessLinkedIn } from '../../Social';
import homeImage from "../../assets/home-image.svg";

import {
    Container,
    Section,
    Title,
    Text,
    HomeButtons,
    Button,
    Image
} from '../../styles/pages/Home/styles';

import { IconContext } from 'react-icons';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

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

export default function Home() {
  return (
    <Container
      initial="out"
      animate="in"
      exit="out"
      variants={ containerVariants }
      transition={ containerTransition }
    >
      <Section>
        <Title>
          Olá, sou o Rauan,
          <br />
          desenvolvedor web.
        </Title>
        <Text>Desenvolvedor Frontend, apaixonado por tecnologia e arte,<br /> e com muito interesse em UI/UX Design.</Text>
        <HomeButtons>
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <Button type="button" onClick={ acessGitHub }>
                <FiGithub />
                GitHub
            </Button>
            <Button type="button" onClick={ acessLinkedIn }>
                <FiLinkedin />
                LinkedIn
            </Button>
          </IconContext.Provider>
        </HomeButtons>
      </Section>
      <Image src={ homeImage } alt="Imagem da Página Inicial" />
    </Container>
  );
}
