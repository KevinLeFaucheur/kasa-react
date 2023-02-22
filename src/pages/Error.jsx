import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../style/colors";

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 100px;
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    font-weight: 700;
    margin-bottom: 3vh;

    @media (max-width: 768px) {
        font-size: 96px;
    }
`

const ErrorMessage = styled.p`
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 10vh;

    @media (max-width: 768px) {
        width: 50vw;
        margin-bottom: 5vh;
        font-size: 1rem;
    }
`

const ErrorLink = styled(Link)`
    font-size: 18px;
    color: ${colors.primary};

    && {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 5vh;
        font-size: 0.8rem;
    }
`

export const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
            <ErrorLink to='/'>Retourner sur la page d’accueil</ErrorLink>
        </ErrorWrapper>
    );
};  