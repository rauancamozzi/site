import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    height: 80vh;
`;

export const PortfolioSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 96px;
`;

export const PortfolioTitle = styled.h1`
    font: 700 4.5rem Lexend, sans-serif;
    color: var(--gray-800);
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 2rem;
    }
`;