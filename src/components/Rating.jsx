import "../style/components/Rating.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Rating = ({ rating }) => {
    return (
        <div className="rating">
            {[...Array(5)].map((_, index) => {
                return rating > index ? <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStar}/> 
                                      : <FontAwesomeIcon style={{'height': '1.5rem'}} key={`star-${index}`} icon={faStarRegular} />
            })}
        </div>
    )
}