import './Card.css';
const Card = ({ cardInfo }) => {
  return (
    <div className="cardContainer">
      <div className="cardImg">
        <img src={cardInfo.src} alt={cardInfo.Name} />
      </div>
      <div className="CardInfo">
        <div>
          <span>Name:</span>
          <span>{cardInfo.Name}</span>
        </div>
        <div>
          <span>Price:</span>
          <span>{cardInfo.Price}$</span>
        </div>
        <div>
          <span>city:</span>
          <span>{cardInfo.City}</span>
        </div>
      </div>
      <button>Book Now</button>
    </div>
  );
};

export default Card;
