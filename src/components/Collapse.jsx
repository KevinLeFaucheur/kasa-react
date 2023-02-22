import { useState } from "react";
import styled from "styled-components";
import colors from "../style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CollapseWrapper = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`

const CollapseHeader = styled.div`
    height: 48px;
    width: 100%;
    padding: 0 1.5rem;
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

const CollapseBody = styled.div`
    min-height: 13vh;
    padding: 2rem 1rem 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    display: ${(props) => { return props.isOpen ? 'block' : 'none'} };
    background-color: ${colors.backgroundLight};
    border-radius: 5px;

    & > ul {
        padding: 0;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        min-height: 10vh;
        font-size: 1rem;
        padding: 0.8rem 1rem;
    }
`

const CollapseH3 = styled.h3`
    font-size: 25px;
    font-weight: 500;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Collapse = ({title, textBody, width}) => {
    const [collapseState, setCollapseState] = useState(false);

    const handleCollapseClick = () => {
        setCollapseState(!collapseState);
    }

    const text = typeof(textBody) === 'object' 
                            ? Object.values(textBody)
                            : textBody;

    return (
        <CollapseWrapper>
            <CollapseHeader onClick={handleCollapseClick}>
                <CollapseH3>{title}</CollapseH3>
                <FontAwesomeIcon icon={faAngleUp} />
            </CollapseHeader>
            <CollapseBody isOpen={collapseState}>
                <ul style={{ listStyle: 'none' }}>
                    {typeof(text) === 'string' ?
                        <li>{text}</li> :
                        text.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </CollapseBody>
        </CollapseWrapper>
    )
}