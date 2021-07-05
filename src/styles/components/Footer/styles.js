import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;

    position: relative;
    bottom: 0;

    margin-bottom: 32px;

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        margin-bottom: 16px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column-reverse;
        margin-bottom: 16px;
        gap: 12px;
    }
`;

export const FooterSpan = styled.span`
    font: 400 1rem Lexend, sans-serif;
    color: var(--gray-800);

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Icons = styled.div`
    color: var(--gray-500);
    transition: all 250ms ease-in-out;
    font-size: 1.2rem;

    &:hover {
        color: var(--gray-800);
        cursor: pointer;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 1rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 1rem;
    }
`;