import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../style/colors";
import * as typography from '../style/typography';

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 100px;
`

const ErrorTitle = styled.h1`
    ${typography.d_error}
    margin-bottom: 3vh;
    
    @media (max-width: 768px) {
        margin-bottom: 0.75rem;
        ${typography.m_error}
    }
`

const ErrorMessage = styled.p`
    ${typography.d_errorMessage}
    margin-bottom: 10vh;
    
    @media (max-width: 768px) {
        ${typography.m_errorMessage}
        width: 50vw;
        margin-bottom: 10vh;
    }
`

const ErrorLink = styled(Link)`
    ${typography.d_errorLink}
    color: ${colors.primary};
    
    && {
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        ${typography.m_errorLink}
        margin-bottom: 5vh;
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