import "../style/pages/Home.css";
// import logements from '../data/logements.json';
import { useFetch } from "../utils/utils";

import { Hero } from '../components/Hero'
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { data: logements, isLoading } = useFetch('http://localhost:3000/data/logements.json')

  return isLoading ? (<div>Loading...</div>) : (
    <div className="home">
      <Hero />
      <div className="home-gallery">
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return  <Link className="home--link" key={id} to={`/lodging/${id}`}>
                    <Card title={title} cover={cover}/>
                  </Link>
        })}
      </div >
    </div>
  );
};