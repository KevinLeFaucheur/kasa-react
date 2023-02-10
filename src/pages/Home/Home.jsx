import image from '../../images/home-bg.jpg'
import { Banner } from '../../components/Banner/Banner'

export const Home = () => {
  return (
    <div className="Home">
      <Banner src={image} alt="Checz vous, partout et ailleurs"/>
    </div>
  );
};