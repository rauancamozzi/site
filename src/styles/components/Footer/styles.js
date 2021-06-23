import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;

    position: relative;
    bottom: 0;

    margin-bottom: 32px;
`;

export const FooterSpan = styled.span`
    font: 400 1rem Lexend, sans-serif;

    color: var(--gray-800);    
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

    &:hover {
        color: var(--gray-800);
        cursor: pointer;
    }
`;