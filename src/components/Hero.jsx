import "../style/components/Hero.css";
import image from '../images/home-bg.jpg'

export const Hero = () => {
    return (
        <div className="hero">
            <img className="hero-image" src={image} alt='Chez vous, partout et ailleurs' />
            <h1 className="hero-title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}