import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
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

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

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

export const ContactTitle = styled.h1`
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

export const ContactSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const ContactCard = styled.div`
    width: 30vw;
    border-radius: 20px;
    margin-bottom: 24px;

    color: var(--gray-500);

    transition: all 250ms ease-in-out;

    &:hover {
        color: var(--gray-800);
        cursor: pointer;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 60vw;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 80vw;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 85vw;
    }
`;

export const ContactCardHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ContactCardTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    font: 500 1rem Lexend, sans-serif;
    letter-spacing: 5px;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

export const ContactCardLink = styled.div`
    font: 700 2rem Lexend, sans-serif;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ContactImage = styled.img`
    width: 45vw;
    height: auto;

    display: block;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        margin-top: 48px;
        width: 75vw;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin-top: 48px;
        width: 75vw;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-top: 48px;
        width: 75vw;
    }
`;