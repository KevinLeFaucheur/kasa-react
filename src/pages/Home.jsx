import styled from "styled-components";
import colors from "../style/colors";
// import logements from '../data/logements.json';

import { Hero } from '../components/Hero'
import { Thumb } from '../components/Thumb';
import { Link } from 'react-router-dom';

import { useFetch } from "../utils/utils";

const HomeWrapper = styled.div`
  margin: 0 100px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`

const Gallery = styled.div`
  width: 100%;
  background: ${colors.backgroundLight};
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 56px 50px;

  @media (max-width: 768px) {
    background: none;
    padding: 0;
  }
`

const StyledLink = styled(Link)`
  width: 31%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Home = () => {
  const { data: logements, isLoading } = useFetch('http://localhost:3000/data/logements.json')

  return isLoading ? (<div>Loading...</div>) : (
    <HomeWrapper>
      <Hero />
      <Gallery>
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return  <StyledLink key={id} to={`/lodging/${id}`}>
                    <Thumb title={title} cover={cover}/>
                  </StyledLink>
        })}
      </Gallery>
    </HomeWrapper>
  );
};