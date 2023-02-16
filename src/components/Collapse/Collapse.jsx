import { useState } from "react";
import styled from "styled-components";
import colors from "../../style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const CollapseWrapper = styled.div`
    margin-bottom: 2rem;
`

const CollapseHeader = styled.div`
    height: 48px;
    margin: 0 17.5%;
    padding: 0 1.5rem;
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    border-radius: 5px;
`

const CollapseBody = styled.div`
    margin: 0 17.5%;
    padding: 2rem 1rem 1rem;
    font-size: 24px;
    font-weight: 400;
    display: ${(props) => { return props.isOpen ? 'block' : 'none'} };
    background-color: ${colors.backgroundLight};
    border-radius: 5px;
`

const CollapseH3 = styled.h3`
    font-size: 25px;
    font-weight: 500;
    margin: 0;
`

export const Collapse = ({title, textBody}) => {
    const [collapseState, setCollapseState] = useState(false);

    const handleCollapseClick = () => {
        setCollapseState(!collapseState);
    }

    return (
        <CollapseWrapper>
            <CollapseHeader onClick={handleCollapseClick}>
                <CollapseH3>{title}</CollapseH3>
                <FontAwesomeIcon icon={faAngleUp} />
            </CollapseHeader>
            <CollapseBody isOpen={collapseState}>{textBody}</CollapseBody>
        </CollapseWrapper>
    )
}