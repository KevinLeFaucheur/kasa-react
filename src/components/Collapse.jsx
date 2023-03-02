import { useState } from "react";
import "../style/components/Collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const Collapse = ({title, textBody}) => {
    const [isOpen, setCollapseState] = useState(false);

    const handleCollapseClick = () => {
        setCollapseState(!isOpen);
    }

    const text = typeof(textBody) === 'object' 
                            ? Object.values(textBody)
                            : textBody;

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={handleCollapseClick}>
                <h3 className="collapse-title">{title}</h3>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
            </div>
            <div className={`collapse-body ${isOpen ? 'collapse-body--opened' : ''}`}>
                <ul style={{ listStyle: 'none' }}>
                    {typeof(text) === 'string' ?
                        <li>{text}</li> :
                        text.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </div>
        </div>
    )
}