import styled, { keyframes } from "styled-components";

// General Components

export const CoverContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    position: relative;
    overflow: hidden;

    h1{
        z-index: 2;
    }
`

export const BackgroundLogo = styled.img`
    position: absolute;
    top: -4rem;
    right: -12rem;
    z-index: 1;
    filter: ${({ theme }) => theme.logo} ;
    animation: rotateAnim 10s linear infinite;
    transition: ease-in-out .5s;

    @media (min-width: 576px) {
        right: -4rem;
    }

    @keyframes rotateAnim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

export const SettingsButton = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    position: fixed;
    bottom: 1rem;
    right: 1rem;

    :hover{
        animation: rotateAnim 1s linear;
        transition: ease-in-out .5s;
    }

    @keyframes rotateAnim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const BackButton = styled.button`
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    position: absolute;
    border: none;
    top: 1rem;
    left: 1rem;
    
`

// User Input Components

export const WelcomeTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    z-index: 2;
    h1{
        position: relative;
        font-size: 3rem;
        padding: 0 3rem;
        text-align: center
    }

    p{
        padding: 2rem 3rem;
        text-align: center;
        font-weight: 600;
    }
`

export const TrainerGif = styled.img`
    height: 10rem;
    margin-bottom: 2rem;
`

export const UsernameForm = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 80vw;
        max-width: 30rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1.5rem;
    }

    button{
        border: 0;
        position: absolute;
        right: 1rem;
        background-color: transparent;
        cursor: pointer;
        &:hover{
            animation: bounce .3s infinite alternate;
        }
        @keyframes bounce {
            to { transform: scale(1.2); }
        }

        img{
            height: 3.5rem
        }
    }

`;

// Settings

export const SettingContainer = styled.div`
    width: 90%;
    max-width: 40rem;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;

    display: flex;
    flex-flow: column;
    align-items: center;
    z-index: 2;

    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    h3{
        padding: 1rem 2rem;;
    }
`;

export const SwitchBackground = styled.div`
    position: relative;
    width: 90px;
    height: 40px;
    border-radius: 30px;
    background-color: #647BDA;
    transition: 1s all ease-in;
`;

export const SwitchButton = styled.button`
        position: absolute;
        cursor: pointer;
        bottom: 5px;
        left: ${({ theme }) => (theme === true ? '55px' : '5px')};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        outline: none;
        border: none;
        transition: .5s all ease-in;
`
export const PaginationButton = styled.button`
    width: 3rem;
    height: 3rem;
    margin: 1rem 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    border-radius: 0.75rem;
    border-style: solid;
    background-color: ${(props) => props.isSelected ? '#5B7DD9' : 'transparent' };
`

// Pokedex

export const Logo = styled.img`
    width: 20rem;
    margin: 5rem 1rem 2rem;
    z-index: 2;
`
export const WelcomeContainer = styled.div`
    z-index:2;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 1rem;
    span{
        color: red;
        font-size: 1.2rem;
    }
    select{
        width: 80vw;
        max-width: 20rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1rem;
    }
    input{
        width: 80vw;
        max-width: 20rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1rem;
    }
`

export const SearchButton = styled.button`
    border: 0;
    position: absolute;
    right: 1rem;
    bottom: -0.5rem;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        animation: bounce .3s infinite alternate;
    }
    @keyframes bounce {
        to { transform: scale(1.2); }
    }

    img{
        height: 3.5rem
    }
`

export const Trainer = styled.img`
    height: 10rem;
    width: 10rem;
`

export const SearchType = styled.button`
    position: relative;
    width: 10rem;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: transparent;
    border-radius: 1rem;
`

export const CardContainer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100rem;
    @media (min-width: 768px) {
        margin: 0 10rem;
    }
`

export const Card = styled.div`
    width: 20rem;
    margin: 2rem 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: transparent;
    backdrop-filter:invert(0.5%) ;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.5rem;
    border-color: ${(prop) => prop.bgColor};

    h6{
        font-weight: normal;
    }
`
export const CardBg = styled.div`
    background-color: ${(prop) => prop.bgColor};
    width: 100%;
    height: 10rem;
    position: relative;
    margin-bottom: 3.5rem;
    display:flex;
    justify-content: center;
    img{
        height: 12.5rem;
        margin: 1rem
    }
`

export const NameTypeContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 1rem;
    width: 100%;
    border-style: none none solid none;
    border-width: 0.1rem;
`

export const StatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    div{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items:center;
        width: 9rem;
        height: 4rem;
    }
`
// Pagination

export const PaginationBar = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5rem;
    
    button{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin: 0.1rem;
        border: 0;
    }


`

//Pokemon Page

export const PokemonCoverContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: ${(props) => (
        props.isDarktheme?
        '#292929':
        props.bgColor
    )};
    color: ${({ theme }) => theme.text};
    position: relative;
    overflow: hidden;

    h1{
        z-index: 2;
    }
`

export const MainInfoContainer = styled.div`
    width: 90vw;
    max-width: 50rem;
    background-color: ${({ theme }) => theme.bg2} ;
    position: relative;
    z-index: 2;
    padding: 9rem 1rem 0 ;
    margin-top: 11rem;
    border-radius: 1rem;

    display: flex;
    flex-flow: column;
    align-items: center;
    img{
        position: absolute;
        top: -12rem;
        width: 20rem;
    }
    hr{
        width: 45%
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width:100%;
    }
    h2{
        padding: 0 0.5rem;
        font-size: 2.5rem;
    }
    h3{
        font-size:2rem;
    }
    p{
        padding: 0.5rem;
    }
`
export const HeightWeightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width:100%;
    padding: 1rem 0;
    
    div{
        display: flex;
        flex-flow: column;
    }
`
export const TypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.bg2};
    width: 90%;
    max-width: 50rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    h2{
        font-size: 2rem;
        padding: 0.5rem 0.5rem;
    }
    hr{
        width: 45%;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width:100%;
    }
`
export const Type = styled.p`
    background-color: ${(prop) => prop.typeColor};
    width: 90%;
    font-size: 2rem;
    text-align: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
`
export const Ability = styled.p`
    background-color: white;
    width: 90%;
    font-size: 2rem;
    text-align: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
`
export const BaseStatContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0.5rem;
`

export const Stat = styled.progress`
    width: 90%;
`
export const Move = styled.p`
    background-color: ${({ theme }) => theme.bg3};
    padding: 0.35rem;
    border-radius: 0.5rem;
    margin: 0.35rem;

`
