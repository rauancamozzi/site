import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.main)`
  width: 90vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectSection = styled.section`
  width: 60vw;
  height: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 90vw;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 90vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 90vw;
  }
`;

export const ProjectIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 16px;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 36px;
    height: 36px;
    border-radius: 4px;
  }
`;

export const ProjectTitle = styled.h1`
  font: 700 4.5rem Lexend, sans-serif;
  margin-bottom: 8px;
  margin-top: 32px;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 3.6rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const ProjectDescription = styled.span`
  font: 300 1.4rem Lexend, sans-serif;
  letter-spacing: 4px;
  color: var(--gray-400);
  margin-bottom: 32px;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

export const ProjectText = styled.p`
  font: 400 1.2rem Lexend, sans-serif;
  color: var(--gray-600);
  text-align: justify;
  margin-bottom: 32px;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1rem;
    text-align: start;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2rem;
    text-align: start;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 0.8rem;
    text-align: start;
  }
`;

export const ProjectTextTitle = styled.h2`
  font: 700 3rem Lexend, sans-serif;
  margin-bottom: 16px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const ProjectImageGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ProjectTextImage = styled.img`
  width: 19vw;
  height: auto;
  border-radius: 20px;
  margin-bottom: 32px;

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    width: 70vw;
    margin-bottom: 32px;
    border-radius: 10px;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 70vw;
    margin-bottom: 32px;
    border-radius: 10px;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    margin-bottom: 32px;
    border-radius: 5px;
  }
`;