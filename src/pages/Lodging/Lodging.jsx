import styled from "styled-components";
import image from '../../images/accomodation-1-3.jpg';
import colors from "../../style/colors";
import { Collapse } from "../../components/Collapse/Collapse";
import { Tag } from "../../components/Tag/Tag";
import { Rating } from "../../components/Rating/Rating";
import { Profile } from "../../components/Profile/Profile";

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
`

const LodgingBody = styled.div`
  display: flex;
  justify-content: space-between;
`

const TagWrapper = styled.div`
  display: flex;
`

export const Lodging = () => {
    return (
      <LodgingWrapper>
        <LodgingBanner src={image} alt={'text'} />
        <LodgingHeader>
          <LodgingLeftWrapper> 
            <h2>Cozy loft on the Canal Saint-Martin</h2>
            <p>Paris, Île-de-France</p>
            <TagWrapper>
              <Tag tagName='Cozy'></Tag>
              <Tag tagName='Canal'/>
              <Tag tagName='Paris 10'/>
            </TagWrapper>
          </LodgingLeftWrapper>
          <LodgingRightWrapper>
              <Profile name={'Alexandre Dumas'} picture='' />
              <Rating rating={3} />
          </LodgingRightWrapper>
        </LodgingHeader>
        <LodgingBody>
          <Collapse key={'1'} title={'Description'} textBody={`Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).`} />
          <Collapse key={'2'} title={'Équipements'} textBody={`Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres`} />
        </LodgingBody>
      </LodgingWrapper>
    );
};