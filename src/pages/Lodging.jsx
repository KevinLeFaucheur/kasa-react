import "../style/pages/Lodging.css"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Collapse } from "../components/Collapse";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import { Profile } from "../components/Profile";
import { Lightbox } from "../components/Lightbox";

import logements from '../data/logements.json';

export const Lodging = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if(logement === undefined) navigate('/')
  });

  return logement && (
    <div className="lodging">
      <Lightbox imageArray={logement.pictures} />
      <div className="lodging-head">
        <div className="lodging-left"> 
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <div className="lodging-tags">
            {logement.tags.map(tag => <Tag key={tag} tagName={tag}></Tag>)}
          </div>
        </div>
        <div className="lodging-right">
            <Profile name={logement.host.name} picture={logement.host.picture} />
            <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="lodging-body">
        <Collapse key={'desc'} title={'Description'} textBody={logement.description} />
        <Collapse key={'equip'} title={'Équipements'} textBody={logement.equipments} />
      </div>
    </div>
  );
};