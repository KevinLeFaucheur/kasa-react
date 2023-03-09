import "../style/components/Carousel.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const Carousel = ({ imageArray }) => {
    const [index, setIndex] = useState(0);

    const handleIndex = (offset) => {
        let nextIndex = index + offset;
        nextIndex = nextIndex >= imageArray.length ? 0 
                    : nextIndex < 0 ? imageArray.length - 1
                    : nextIndex;
        setIndex(nextIndex);
    }

    return (
        <div className="carousel">
            <button className="carousel-button carousel-button--left" onClick={() => handleIndex(-1) }>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <img className="carousel-image" src={imageArray[index]} alt="" />
            <button className="carousel-button carousel-button--right" onClick={() => handleIndex(1) }>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <div className="carousel-index">{index + 1}/{imageArray.length}</div>
        </div>
    )    
}