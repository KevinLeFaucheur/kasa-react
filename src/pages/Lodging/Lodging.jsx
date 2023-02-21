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
`

const LodgingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const LodgingLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LodgingRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LodgingBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 80%;
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
      <LodgingHeader>
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
      </LodgingHeader>
      <LodgingBody>
        <Collapse key={'desc'} title={'Description'} textBody={logement.description} />
        <Collapse key={'equip'} title={'Équipements'} textBody={logement.equipments} />
      </LodgingBody>
    </LodgingWrapper>
  );
};