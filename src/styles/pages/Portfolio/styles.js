import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90vw;
    height: 100%;
`;

export const PortfolioSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const PortfolioTitle = styled.h1`
    font: 700 3rem Lexend, sans-serif;
    color: var(--gray-800);
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 2rem;
    }
`;