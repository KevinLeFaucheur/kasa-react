import "../style/pages/Home.css";
import logements from '../data/logements.json';

import { Hero } from '../components/Hero'
import { Thumb } from '../components/Thumb';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="home-gallery">
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return  <Link className="home--link" key={id} to={`/lodging/${id}`}>
                    <Thumb title={title} cover={cover}/>
                  </Link>
        })}
      </div >
    </div>
  );
};