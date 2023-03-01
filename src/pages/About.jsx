import { Collapse } from '../components/Collapse'
import '../style/pages/About.scss'
import about from '../data/about.json'

export const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'></div>
      <div className='about-collapses'>
        {about.map((block, index) => {
          return <Collapse key={index} title={block.title} textBody={block.text}/> 
        })}
      </div>
    </div>
  );
};