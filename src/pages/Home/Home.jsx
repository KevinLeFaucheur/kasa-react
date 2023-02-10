import { Hero } from '../../components/Hero/Hero.styled'
import { Gallery } from '../../components/Gallery/Gallery.styled';
import { Thumb } from '../../components/Thumb/Thumb';

const tempList = [1, 2, 3, 4, 5, 6]

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Gallery>
        {tempList.map((index) => <Thumb key={index} />)}
      </Gallery>
    </div>
  );
};