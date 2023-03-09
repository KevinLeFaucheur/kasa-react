import "../style/components/Card.css";

export const Card = ({ cover, title }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${cover})` }}>
            <h2 className="card-title">{title}</h2>
        </div>
    )
}