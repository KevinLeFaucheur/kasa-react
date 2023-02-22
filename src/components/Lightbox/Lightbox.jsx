import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const LightboxWrapper = styled.div`
    position: relative;
    height: 415px;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        height: 255px;
        margin-bottom: 1.5rem;
    }
`

const Button = styled.button`
    all: unset;
    position: absolute;
    height: 48px;
    top: calc(50% - 48px);
    ${(props) => props.position === 'right' ? "right: calc(0% + 1.5rem)" : "left: calc(0% + 1rem)"};
    color: white;
    font-size: 5rem;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        /* top: calc(50% - 48px); */
    }
`

const PageIndex = styled.div`
    position: absolute;
    left: 50%;
    bottom: calc(0% + 1.5rem);
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
    color: white;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        /* top: calc(50% - 48px); */
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
`

export const Lightbox = ({ imageArray }) => {
    const [index, setIndex] = useState(0);

    const handleIndex = (offset) => {
        let nextIndex = index + offset;
        nextIndex = nextIndex >= imageArray.length ? 0 
                    : nextIndex < 0 ? imageArray.length - 1
                    : nextIndex;
        setIndex(nextIndex);
    }

    return (
        <LightboxWrapper>
            <Button onClick={() => handleIndex(-1) }>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            <Image src={imageArray[index]} alt="" />
            <Button position={'right'} onClick={() => handleIndex(1) }>
                <FontAwesomeIcon icon={faAngleRight} />
            </Button>
            <PageIndex>{index + 1}/{imageArray.length}</PageIndex>
        </LightboxWrapper>
    )    
}