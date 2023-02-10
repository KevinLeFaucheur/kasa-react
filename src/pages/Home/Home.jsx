import image from '../../images/home-bg.jpg'
import { Banner } from '../../components/Banner/Banner.styled'
import { Gallery } from '../../components/Gallery/Gallery.styled';

export const Home = () => {
  return (
    <div className="Home">
      <Banner src={image} alt="Checz vous, partout et ailleurs"/>
      <Gallery />
    </div>
  );
};