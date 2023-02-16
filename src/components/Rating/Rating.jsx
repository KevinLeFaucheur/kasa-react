import styled from "styled-components";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RatingWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Rating = ({ rating }) => {
    return (
        <RatingWrapper>
            {[...Array(5)].map((_, index) => {
                console.log(rating)
                return rating > index ? <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStar}/> 
                                      : <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStarRegular} />
            })}
        </RatingWrapper>
    )
}