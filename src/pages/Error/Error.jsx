import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    font-weight: 700;
    margin-bottom: 3vh;
`

const ErrorMessage = styled.p`
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 10vh;
`

const ErrorLink = styled(Link)`
    font-size: 18px;
`

export const Error = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
            <ErrorLink to='/' >Retourner sur la page d’accueil</ErrorLink>
        </ErrorContainer>
    );
};  