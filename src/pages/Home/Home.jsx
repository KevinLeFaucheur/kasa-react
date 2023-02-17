import { Hero } from '../../components/Hero/Hero.styled'
import { Gallery } from '../../components/Gallery/Gallery.styled';
import { Thumb } from '../../components/Thumb/Thumb';
import logements from '../../data/logements.json';

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Gallery>
        {logements.map(lodging => {
          const { id, title, cover } = lodging;
          return <Thumb key={id} title={title} cover={cover}/>
        })}
      </Gallery>
    </div>
  );
};