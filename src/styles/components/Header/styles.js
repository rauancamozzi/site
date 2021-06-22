import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 100%;
    height: auto;

    margin-top: 32px;
`;

export const Logo = styled.img`
    width: 48px;
    height: 35px;

    display: block;

    transition: all 250ms ease-in-out;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`; 

export const NavbarMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, auto);

    font: 600 1.1rem Lexend, sans-serif;

    list-style: none;
    text-align: center;
`;

export const NavbarLinks = styled.li`
    display: inline-block;
    
    text-decoration: none;
    text-align: center;

    color: var(--gray-500);

    padding-left: 3.4rem;

    transition: all 250ms ease-in-out;

    &:hover {
        color: var(--gray-800);
        cursor: pointer;
    }
`;