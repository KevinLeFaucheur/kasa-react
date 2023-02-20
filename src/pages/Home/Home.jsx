import styled from "styled-components";
import colors from "../../style/colors";
import logements from '../../data/logements.json';

import { Hero } from '../../components/Hero/Hero'
import { Thumb } from '../../components/Thumb/Thumb';
import { Link } from 'react-router-dom';

const Gallery = styled.div`
    width: 100%;
    background: ${colors.backgroundLight};
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 56px 50px;
`

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Gallery>
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return  <Link key={id} to={`/lodging/${id}`}>
                    <Thumb title={title} cover={cover}/>
                  </Link>
        })}
      </Gallery>
    </div>
  );
};