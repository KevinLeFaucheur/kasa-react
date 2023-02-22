import styled from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RatingWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        align-items: center;
    }
`

export const Rating = ({ rating }) => {
    return (
        <RatingWrapper>
            {[...Array(5)].map((_, index) => {
                return rating > index ? <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStar}/> 
                                      : <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStarRegular} />
            })}
        </RatingWrapper>
    )
}