import { Collapse } from '../../components/Collapse/Collapse'
import styled from 'styled-components';
import image from '../../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import about from '../../data/about.json'

const Banner = styled.div`
  height: 223px;
  margin-bottom: 2rem;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image});
  border-radius: 25px;
  background-size: cover;
  background-position: center;
`

export const About = () => {
  return (
    <div className="About">
      <Banner />
      {about.map((block, index) => {
        return <Collapse key={index} title={block.title} textBody={block.text}/> 
      })}
    </div>
  );
};