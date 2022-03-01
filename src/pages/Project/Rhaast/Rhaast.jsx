import React, { Fragment } from 'react';

import {
  ProjectContainer,
  ProjectSection,
  ProjectIcon,
  ProjectTitle,
  ProjectDescription,
  ProjectText,
  ProjectTextTitle,
  ProjectTextImage,
  ProjectImageGroup
} from '../../../styles/pages/Project/styles';

import rhaastProjectIcon from '../../../assets/rhaast/icon.png';
import rhaastEconomy from '../../../assets/rhaast/economy.png';
import rhaastLevel from '../../../assets/rhaast/level.png';
import rhaastStore from '../../../assets/rhaast/store.png';
import rhaastInventory from '../../../assets/rhaast/inventory.png';
import rhaastGuess1 from '../../../assets/rhaast/guess1.png';
import rhaastGuess2 from '../../../assets/rhaast/guess2.png';
import rhaastGuess3 from '../../../assets/rhaast/guess3.png';

const projectVariants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const projectsTransition = {
  duration: 0.6,
  delay: 0.4,
  type: "tween",
  ease: "easeInOut"
}

export default function Rhaast() {
  return (
    <Fragment>
      <ProjectContainer
        initial="out"
        animate="in"
        exit="out"
        variants={ projectVariants }
        transition={ projectsTransition }
      >
        <ProjectSection>
          <ProjectTitle>
            <ProjectIcon src={ rhaastProjectIcon } />
            Rhaast
          </ProjectTitle>
          <ProjectDescription>BOT</ProjectDescription>
          <ProjectText>
            <b>Rhaast</b> é um bot para o Discord que o objetivo de seu desenvolvimento foi praticar
            e aplicar meus conhecimentos básicos de Javascript utilizando a biblioteca Discord.js 
            que permite a integração com o aplicativo. Ele possui algumas funcionalidades 
            que podem ser acessadas por comandos via chat do próprio Discord. Foi construído com Javascript, 
            Node.js e MongoDB como banco de dados.
          </ProjectText>
          <ProjectText>
            As funcionalidades do bot são:
          </ProjectText>
          <ProjectTextTitle>Palpites</ProjectTextTitle>
          <ProjectText>
            Os usuários podem criar palpites, e os outros usuários podem apostar  qual será a opção ganhadora. 
            Assim que o palpite é encerrado, os usuários que apostaram na opção ganhadora ganham uma porcentagem 
            proporcional ao que o usuário apostou, da quantidade total apostada na opção perdedora.
          </ProjectText>
          <ProjectImageGroup>
            <ProjectTextImage src={rhaastGuess1} />
            <ProjectTextImage src={rhaastGuess2} />
            <ProjectTextImage src={rhaastGuess3} />
          </ProjectImageGroup>
          <ProjectTextTitle>Economia</ProjectTextTitle>
          <ProjectText>
            O bot possui um sistema de economia, cada usuário tem um saldo que contém dinheiro (fictício) na carteira 
            e no banco. Os usuários podem realizar saques, depósitos e transferir quantias para outros usuários. O dinheiro 
            poder ser adquirido através do envio de mensagens (texto, áudio, vídeos, documentos, imagens...) em qualquer chat 
            de texto ou pelo tempo conectado em canais de voz.
          </ProjectText>
          <ProjectTextImage src={rhaastEconomy} />
          <ProjectTextTitle>Nível</ProjectTextTitle>
          <ProjectText>
            Após adicionado ao Discord, o bot cria um sistema de níveis, para alcançar um novo nível um usuário deve ganhar experiência. 
            A experiência pode ser adquirida através do envio de mensagens (texto, áudio, vídeos, documentos, imagens...) em qualquer chat de texto ou pelo tempo conectado em canais de voz.
          </ProjectText>
          <ProjectTextImage src={rhaastLevel} />
          <ProjectTextTitle>Loja</ProjectTextTitle>
          <ProjectText>
            O bot gerencia uma loja interna. Cada item vendido na loja possui um preço, nível mínimo para compra e quantidade. Assim que a 
            compra de um item é realizada, o item é adicionado ao inventário do usuário.
          </ProjectText>
          <ProjectTextImage src={rhaastStore} />
          <ProjectTextTitle>Inventário</ProjectTextTitle>
          <ProjectText>
            O bot gerencia o inventário de cada usuário. Os itens adicionados ao inventário podem ser usados e possuem funcionalidades.
          </ProjectText>
          <ProjectTextImage src={rhaastInventory} />
          <ProjectTextTitle>Tecnologias utilizadas</ProjectTextTitle>
          <ProjectText>
            Javascript • Node.js • Discord.js • MongoDB • Git
          </ProjectText>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
}