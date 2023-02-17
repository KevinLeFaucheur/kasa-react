import { Hero } from '../../components/Hero/Hero.styled'
import { Gallery } from '../../components/Gallery/Gallery.styled';
import { Thumb } from '../../components/Thumb/Thumb';
import logements from '../../data/logements.json';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Gallery>
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return  <Link to={`/lodging/${id}`}>
                    <Thumb key={id} title={title} cover={cover}/>
                  </Link>
        })}
      </Gallery>
    </div>
  );
};