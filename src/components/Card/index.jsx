import "./card.css";

const Card = ({ icon, heading, content }) => {
  return (
    <div className="card-wrapper">
      {icon}
      <p className="small-caption">{heading}</p>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default Card;
