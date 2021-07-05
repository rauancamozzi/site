import React from "react";
import contactImage from "../../assets/contact-image.svg";

import {
  ContactContainer,
  ContactSection,
  ContactTitle,
  ContactSocial,
  ContactCard,
  ContactCardHeader,
  ContactCardTitle,
  ContactCardIcon,
  ContactCardLink,
  ContactImage,
} from "../../styles/pages/Contact/styles";

import { 
  FiGithub, 
  FiLinkedin, 
  FiAtSign,
  FiInstagram, 
  FiArrowUpRight 
} from "react-icons/fi";

import {
  acessGitHub,
  acessLinkedIn,
  acessInstagram,
  inviteEmail
} from '../../Social';

export default function Contact() {
  return (
    <ContactContainer>
      <ContactSection>
        <ContactTitle>Contato</ContactTitle>
        <ContactSocial>
            <ContactCard onClick={ inviteEmail }>
              <ContactCardHeader>
                <ContactCardTitle>
                  <FiAtSign />
                  EMAIL
                </ContactCardTitle>
                <ContactCardIcon>
                  <FiArrowUpRight />
                </ContactCardIcon>
              </ContactCardHeader>
              <ContactCardLink>
                rauancamozzi@hotmail.com
              </ContactCardLink>
            </ContactCard>

            <ContactCard onClick={ acessLinkedIn }>
              <ContactCardHeader>
                <ContactCardTitle>
                  <FiLinkedin />
                  LINKEDIN
                </ContactCardTitle>
                <ContactCardIcon>
                  <FiArrowUpRight />
                </ContactCardIcon>
              </ContactCardHeader>
              <ContactCardLink>
                Rauan Camozzi
              </ContactCardLink>
            </ContactCard>

            <ContactCard onClick={ acessGitHub }>
              <ContactCardHeader>
                <ContactCardTitle>
                  <FiGithub />
                  GITHUB
                </ContactCardTitle>
                <ContactCardIcon>
                  <FiArrowUpRight />
                </ContactCardIcon>
              </ContactCardHeader>
              <ContactCardLink>
                rauancamozzi
              </ContactCardLink>
            </ContactCard>

            <ContactCard onClick={ acessInstagram }>
              <ContactCardHeader>
                <ContactCardTitle>
                  <FiInstagram />
                  INSTAGRAM
                </ContactCardTitle>
                <ContactCardIcon>
                  <FiArrowUpRight />
                </ContactCardIcon>
              </ContactCardHeader>
              <ContactCardLink>
                rauancamozzi
              </ContactCardLink>
            </ContactCard>
        </ContactSocial>
      </ContactSection>
      <ContactImage src={contactImage} alt="Imagem da Página Contato" />
    </ContactContainer>
  );
}
