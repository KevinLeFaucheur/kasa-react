import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Collapse } from "../components/Collapse";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import { Profile } from "../components/Profile";
import { Lightbox } from "../components/Lightbox";
import { useFetch } from "../utils/utils";

import logements from '../data/logements.json';

const LodgingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`

const LodgingHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`

const LodgingLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > p, h2 {
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

const LodgingRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`

const LodgingBody = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TagWrapper = styled.div`
  display: flex;
`

export const Lodging = () => {
  const { data: logements, isLoading } = useFetch('http://localhost:3000/data/logements.json')
  const { id } = useParams();
  const navigate = useNavigate();

  let logement = null;
  if(!isLoading) {
    logement = logements.find(logement => logement.id === id);
  }
  
  useEffect(() => {
    if(isLoading) return;
    if(logement === undefined) navigate('../404')
  });

  return logement && (
    <LodgingWrapper>
      <Lightbox imageArray={logement.pictures} />
      <LodgingHead>
        <LodgingLeftWrapper> 
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <TagWrapper>
            {logement.tags.map(tag => <Tag key={tag} tagName={tag}></Tag>)}
          </TagWrapper>
        </LodgingLeftWrapper>
        <LodgingRightWrapper>
            <Profile name={logement.host.name} picture={logement.host.picture} />
            <Rating rating={logement.rating} />
        </LodgingRightWrapper>
      </LodgingHead>
      <LodgingBody>
        <Collapse key={'desc'} title={'Description'} textBody={logement.description} />
        <Collapse key={'equip'} title={'Équipements'} textBody={logement.equipments} />
      </LodgingBody>
    </LodgingWrapper>
  );
};