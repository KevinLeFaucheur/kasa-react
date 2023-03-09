import { useState } from "react";
import styled from "styled-components";
import colors from "../style/colors";
import * as typography from '../style/typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
    
    @media (max-width: 768px) {
        height: 30px;
    }
`

const CollapseBody = styled.div`
    display: ${(props) => { return props.isOpen ? 'block' : 'none'} };
    min-height: 13vh;
    padding: 2rem 1rem 1rem;
    ${typography.d_collapseBody}
    background-color: ${colors.backgroundLight};
    border-radius: 5px;
    /* visibility: ${(props) => { return props.isOpen ? 'visible' : 'collapse'} }; */
    
    & > ul {
        padding: 0;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        ${typography.m_collapseBody}
        min-height: 10vh;
        padding: 0.8rem 1rem;
    }
`

const CollapseH3 = styled.h3`
    ${typography.d_collapseHeader}
    margin: 0;
    
    @media (max-width: 768px) {
        ${typography.m_collapseHeader}
    }
`

export const Collapse = ({title, textBody}) => {
    const [isOpen, setCollapseState] = useState(false);

    const handleCollapseClick = () => {
        setCollapseState(!isOpen);
    }

    const text = typeof(textBody) === 'object' 
                            ? Object.values(textBody)
                            : textBody;

    return (
        <CollapseWrapper>
            <CollapseHeader onClick={handleCollapseClick}>
                <CollapseH3>{title}</CollapseH3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
            </CollapseHeader>
            <CollapseBody isOpen={isOpen}>
                <ul style={{ listStyle: 'none' }}>
                    {Array.isArray(text) ?
                        text.map((element, index) => <li key={index}>{element}</li>) :
                        <li>{text}</li>}
                </ul>
            </CollapseBody>
        </CollapseWrapper>
    )
}