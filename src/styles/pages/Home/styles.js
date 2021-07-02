import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    height: 100%;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
        gap: 48px;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        flex-direction: column;
        gap: 36px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        gap: 48px;
        margin-top: 48px;
        margin-bottom: 48px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        align-items: center;
        justify-content: center;
        margin-top: 24px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        align-items: center;
        justify-content: center;
        margin-top: 18px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        align-items: center;
        justify-content: center;
        margin-top: 16px;
    }
`;

export const Title = styled.h1`
    color: var(--gray-800);

    font: 700 4.5rem Lexend, sans-serif;
    line-height: 100%;
    
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 4rem;
        text-align: center;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 3.8rem;
        text-align: center;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const Text = styled.p`
    color: var(--gray-600);

    font: 400 1.2rem Lexend, sans-serif;

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        text-align: center;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 0.8rem;
        text-align: center;
    }
`;

export const HomeButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    color: var(--gray-300);
    background: var(--gray-800);
    border: 0;
    border-radius: 20px;
    width: 240px;
    height: 70px;

    font: 500 1.2rem Lexend, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    transition: all 200ms ease-in-out;

    &:hover {
        background: var(--gray-700);
        cursor: pointer;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 220px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 200px;
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 200px;
        height: 56px;
        font-size: 1rem;
    }
`;

export const Image = styled.img`
    width: 40vw;
    height: auto;

    display: block;
    
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 70vw;
        margin-bottom: 24px;
    }

    @media only screen and (min-width: 481px) and (max-width: 768px) {
        width: 70vw;
        margin-bottom: 18px;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 70vw;
        margin-bottom: 36px;
    }
`;