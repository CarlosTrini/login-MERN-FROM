import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    padding: 1rem 3rem ;
    background:#000000 ;
    color: #ffffff;
    a{
        margin-top: 0;
        text-decoration: none;
        text-transform: uppercase;
        color: #ffffff;
        font-weight: bold;
        &:hover{
            border-bottom: .1rem solid yellow ;
        }
    }
    ul{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1rem;
    }
`;

export const  Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: #d3cccc;
`;

export const Button = styled.button`
    padding:.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #d3cccc;
    cursor: pointer;
`;