import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    height: 100%;
`;

export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AboutTitle = styled.h1`
    font: 700 3rem Lexend, sans-serif;
    color: var(--gray-800);
`;

export const AboutSubtitle = styled.h2`
    font: 700 2rem Lexend, sans-serif;
    color: var(--gray-800);
`;

export const AboutText = styled.p`
    font: 400 1.2rem Lexend, sans-serif;
    color: var(--gray-600);
`;

export const AboutImage = styled.img`
    width: 700px;
    height: auto;

    display: block;
`;