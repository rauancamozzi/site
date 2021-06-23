import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    height: 100%;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h1`
    color: var(--gray-800);

    font: 700 4.5rem Lexend, sans-serif;
    line-height: 100%;
`;

export const Text = styled.p`
    color: var(--gray-600);

    font: 400 1.2rem Lexend, sans-serif;
`;

export const HomeButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Button = styled.button`
    color: var(--gray-300);
    background: var(--gray-800);
    border: 0;
    border-radius: 20px;
    width: 240px;
    height: 60px;

    font: 500 1.5rem Lexend, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    transition: all 200ms ease-in-out;

    &:hover {
        background: var(--gray-300);
        color: var(--gray-800);
        cursor: pointer;
    }
`;

export const Image = styled.img`
    width: 784px;
    height: auto;

    display: block;
`;