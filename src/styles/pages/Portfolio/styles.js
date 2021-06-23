import styled from "styled-components";

export const PortfolioContainer = styled.div`
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
    gap: 20px;
`;

export const PortfolioTitle = styled.h1`
    font: 700 3rem Lexend, sans-serif;
    color: var(--gray-800);
`;