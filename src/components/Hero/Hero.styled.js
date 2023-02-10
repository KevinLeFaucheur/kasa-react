import styled from "styled-components";
import image from '../../images/home-bg.jpg'

const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 223px;
    margin-bottom: 3vh;
`

const HeroBackground = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    filter: brightness(70%);
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
    font-size: 48px;
    font-weight: 500;
`

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroBackground src={image} alt='Chez vous, partout et ailleurs' />
            <HeroTitle>Chez vous, partout et ailleurs</HeroTitle>
        </HeroContainer>
    )
}