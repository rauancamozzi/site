import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    height: 100%;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
        margin-top: 48px;
        margin-bottom: 48px;
        gap: 16px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        flex-direction: column;
        margin-top: 48px;
        margin-bottom: 48px;
        gap: 16px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        margin-top: 32px;
        margin-bottom: 32px;
        gap: 16px;
    }
`;

export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        align-items: center;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        align-items: center;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        align-items: center;
    }
`;

export const AboutTitle = styled.h1`
    font: 700 3rem Lexend, sans-serif;
    color: var(--gray-800);

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        text-align: center;
        font-size: 3.6rem;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        text-align: center;
        font-size: 2.4rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        text-align: center;
        font-size: 2rem;
    }
`;

export const AboutSubtitle = styled.h2`
    font: 700 2rem Lexend, sans-serif;
    color: var(--gray-800);
    margin-top: 24px;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        text-align: center;
        font-size: 2.4rem;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        text-align: center;
        font-size: 1.8rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const AboutText = styled.p`
    font: 400 1.2rem Lexend, sans-serif;
    color: var(--gray-600);
    width: 40vw;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        text-align: justify;
        font-size: 1.4rem;
        width: 80vw;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        text-align: justify;
        font-size: 1rem;
        width: 70vw;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        text-align: justify;
        font-size: 1rem;
        width: 80vw;
    }
`;

export const AboutImage = styled.img`
    width: 35vw;
    height: auto;

    display: block;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 65vw;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 65vw;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 70vw;
    }
`;