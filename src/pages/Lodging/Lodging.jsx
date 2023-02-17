import styled from "styled-components";
import { Collapse } from "../../components/Collapse/Collapse";
import { Tag } from "../../components/Tag/Tag";
import { Rating } from "../../components/Rating/Rating";
import { Profile } from "../../components/Profile/Profile";

import logements from '../../data/logements.json';
const props = logements[0];

const LodgingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LodgingBanner = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 25px;
  object-fit: cover;
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
    return (
      <LodgingWrapper>
        <LodgingBanner src={props.cover} alt={props.title} />
        <LodgingHeader>
          <LodgingLeftWrapper> 
            <h2>{props.title}</h2>
            <p>{props.location}</p>
            <TagWrapper>
              {props.tags.map(tag => <Tag key={tag} tagName={tag}></Tag>)}
            </TagWrapper>
          </LodgingLeftWrapper>
          <LodgingRightWrapper>
              <Profile name={props.host.name} picture={props.host.picture} />
              <Rating rating={props.rating} />
          </LodgingRightWrapper>
        </LodgingHeader>
        <LodgingBody>
          <Collapse key={'desc'} title={'Description'} textBody={props.description} />
          <Collapse key={'equip'} title={'Équipements'} textBody={props.equipments} />
        </LodgingBody>
      </LodgingWrapper>
    );
};