import "../style/components/Thumb.css";

export const Thumb = ({ cover, title }) => {
    return (
        <div className="thumb" style={{ backgroundImage: `url(${cover})` }}>
            {/* <img className="thumb-cover" src={cover} alt={title} /> */}
            <h2 className="thumb-title">{title}</h2>
        </div>
    )
}