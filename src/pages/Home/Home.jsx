import { Hero } from '../../components/Hero/Hero.styled'
import { Gallery } from '../../components/Gallery/Gallery.styled';

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Gallery />
    </div>
  );
};