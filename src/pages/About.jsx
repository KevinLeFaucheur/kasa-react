import { Collapse } from '../components/Collapse'
import styled from 'styled-components';
import * as typography from '../style/typography';
import image from '../images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'
import about from '../data/about.json'

const AboutWrapper = styled.div`
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0 1rem;
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

const CollapseWrapper = styled.div`
  padding: 0 10%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const StyledCollpase = styled(Collapse)`
  h3 { 
    ${typography.d_aboutCollapseHeader} 
  }
  li { 
    ${typography.d_aboutCollapseBody} 
  }
  @media (max-width: 768px) {
    h3 { 
      ${typography.m_aboutCollapseHeader} 
    }
    li { 
      ${typography.m_aboutCollapseBody} 
    }
  }
`

export const About = () => {
  return (
    <AboutWrapper>
      <Banner />
      <CollapseWrapper>
        {about.map((block, index) => {
          return <StyledCollpase key={index} title={block.title} textBody={block.text}/> 
        })}
      </CollapseWrapper>
    </AboutWrapper>
  );
};