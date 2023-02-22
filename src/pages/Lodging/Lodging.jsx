import styled from "styled-components";
import { useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";

import { Collapse } from "../../components/Collapse/Collapse";
import { Tag } from "../../components/Tag/Tag";
import { Rating } from "../../components/Rating/Rating";
import { Profile } from "../../components/Profile/Profile";
import { Lightbox } from "../../components/Lightbox/Lightbox";

import logements from '../../data/logements.json';

const LodgingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
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
  column-gap: 6%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TagWrapper = styled.div`
  display: flex;
`

export const Lodging = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if(logement === undefined) navigate('/')
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