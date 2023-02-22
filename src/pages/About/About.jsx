import { Collapse } from '../../components/Collapse'
import styled from 'styled-components';
import image from '../../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import about from '../../data/about.json'

const AboutWrapper = styled.div`
  margin: 0 100px;
`

const CollapseWrapper = styled.div`
  padding: 0 10%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`

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
    <AboutWrapper>
      <Banner />
      <CollapseWrapper>
        {about.map((block, index) => {
          return <Collapse key={index} title={block.title} textBody={block.text}/> 
        })}
      </CollapseWrapper>
    </AboutWrapper>
  );
};