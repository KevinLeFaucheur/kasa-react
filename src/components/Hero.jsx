import styled from "styled-components";
import * as typography from '../utils/typography'
import image from '../images/home-bg.jpg'

const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    margin-bottom: 3vh;
        
    @media (max-width: 768px) {
        height: 111px;
    }
`

const HeroBackground = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: brightness(70%);
        
    @media (max-width: 768px) {
        border-radius: 10px;
    }
`

const HeroTitle = styled.h1`
    position: absolute;
    top: 0;
    width: 100%;
    height: 48px;
    line-height: 223px;
    margin: 0;
    text-align: center;
    color: white;
    ${typography.d_hero}
        
    @media (max-width: 768px) {
        top: 31px;
        left: 16px;
        width: 50%;
        line-height: 24px;
        margin: 0;
        text-align: left;
        ${typography.m_hero}
    }
`

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroBackground src={image} alt='Chez vous, partout et ailleurs' />
            <HeroTitle>Chez vous, partout et ailleurs</HeroTitle>
        </HeroContainer>
    )
}