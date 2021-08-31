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
`;

export const ProjectIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 16px;
`;

export const ProjectTitle = styled.h1`
  font: 700 4.5rem Lexend, sans-serif;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.span`
  font: 300 1.4rem Lexend, sans-serif;
  letter-spacing: 4px;
  color: var(--gray-400);
  margin-bottom: 32px;
`;

export const ProjectText = styled.p`
  font: 400 1.2rem Lexend, sans-serif;
  color: var(--gray-600);
  text-align: justify;
  margin-bottom: 32px;
`;

export const ProjectTextTitle = styled.h2`
  font: 700 3rem Lexend, sans-serif;
  margin-bottom: 16px;
`;

export const ProjectTextImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 32px;
`;