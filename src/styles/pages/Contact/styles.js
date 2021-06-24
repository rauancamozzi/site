import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    height: 100%;
`;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContactTitle = styled.h1`
    font: 700 3rem Lexend, sans-serif;
    color: var(--gray-800);
`;

export const ContactSocial = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        align-items: center;
        gap: 5px;

        font: 500 1rem Lexend, sans-serif;
        color: var(--gray-500);
    }

    a {
        font: 600 2rem Lexend, sans-serif;
        margin-bottom: 32px;
        text-decoration: none;
        color: var(--gray-800);
        transition: all 250ms ease-in-out;

        &:hover {
            color: var(--gray-700);
        }
    }
`;

export const ContactImage = styled.img`
    width: 784px;
    height: auto;

    display: block;
`;