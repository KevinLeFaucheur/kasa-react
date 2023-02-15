import Collapse from '../../components/Collapse/Collapse'
import styled from 'styled-components';
import image from '../../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'

const Banner = styled.div`
  height: 223px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image});
  border-radius: 25px;
  background-size: cover;
  background-position: center;
`

export const About = () => {
  return (
    <div className="About">
      <Banner />
      {/* <Collapse /> */}
    </div>
  );
};