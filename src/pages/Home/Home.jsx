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

export default function Home() {
  return (
    <Container>
      <Section>
        <Title>
          Olá, sou o Rauan,
          <br />
          desenvolvedor web.
        </Title>
        <Text>Desenvolvedor Frontend</Text>
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
