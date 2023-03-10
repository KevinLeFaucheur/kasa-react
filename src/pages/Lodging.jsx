import styled from "styled-components";
import * as typography from '../style/typography';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Collapse } from "../components/Collapse";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import { Profile } from "../components/Profile";
import { Carousel } from "../components/Carousel";
import { useFetch } from "../utils/utils";
// import logements from '../data/logements.json';

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
    margin-bottom: 1rem;
  }
`

const LodgingLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    ${typography.d_title}
    padding-bottom: 1rem;
  }

  & > p {
    ${typography.d_location}
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    & > h2 {
      ${typography.m_title}
      padding-bottom: 0.3rem;
    }

    & > p {
      ${typography.m_location}
      padding-bottom: 0.6rem;
    }
    margin-bottom: 1rem;
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
      <Carousel imageArray={logement.pictures} />
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
        <Collapse key={'equip'} title={'??quipements'} textBody={logement.equipments} />
      </LodgingBody>
    </LodgingWrapper>
  );
};