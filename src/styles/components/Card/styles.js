import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 90%;
    height: auto;
    background-color: var(--gray-100);
    border-radius: 20px;
    padding: 48px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 200ms ease-in-out;
    margin-bottom: 48px;

    &:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    }

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        width: 60vw;
        flex-direction: column;
        padding: 32px;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 60vw;
        flex-direction: column;
        padding: 32px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 60vw;
        flex-direction: column;
        padding: 32px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 60vw;
        flex-direction: column;
        padding: 32px;
    }
`;

export const CardImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-right: 48px;

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        margin-right: 0;
        margin-bottom: 32px;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        margin-right: 0;
        margin-bottom: 32px;
        width: 180px;
        height: 180px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 32px;
        width: 160px;
        height: 160px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 32px;
        width: 120px;
        height: 120px;
    }
`;

export const CardText = styled.div`
    width: 88%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const CardTitle = styled.h1`
    font-size: 4rem;
    font: 600 4rem Lexend, sans-serif;

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        margin: 0 auto;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        margin: 0 auto;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin: 0 auto;
        font-size: 3.4rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin: 0 auto;
        font-size: 1.8rem;
    }
`;
export const CardSubtitle = styled.h2`
    font: 300 1rem Lexend, sans-serif;
    color: #A1A1AA;
    letter-spacing: 4px;

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        text-align: center;
        margin-bottom: 32px;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        text-align: center;
        margin-bottom: 32px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        text-align: center;
        margin-bottom: 32px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        text-align: center;
        margin-bottom: 32px;
    }
`;
export const CardButton = styled.button`
    width: 300px;
    height: 80px;
    background: var(--gray-800);
    border-radius: 20px;
    border: 0;
    font-size: 1.5rem;
    color: var(--gray-300);
    font: 500 1.2rem Lexend, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 18px;
    transition: all 200ms ease-in-out;
    margin-left: 48px;

    &:hover {
        background: var(--gray-700);
        cursor: pointer;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
        margin-left: 0;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        margin-left: 0;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin-left: 0;
        width: 240px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        margin-left: 0;
        width: 160px;
        font-size: 1rem;
        height: 66px;
    }
`;

export const CardButtonIcon = styled.div`
    font-size: 1.6rem;
    display: flex;
    align-items: center;
`;

