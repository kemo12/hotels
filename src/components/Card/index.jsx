import './Card.css';
import { useData } from './../../Hooks/DataContext';
import { useNavigate } from 'react-router-dom';

const Card = ({ cardInfo, isAdmain }) => {
  const { booked, setBooked } = useData();
  let navigate = useNavigate();
  const handleBook = () => {
    setBooked([...booked, cardInfo]);
    navigate('/Reserved');
  };
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
          <span>Date:</span>
          <span>{cardInfo.date}</span>
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
      {isAdmain ? null : <button onClick={handleBook}>Book Now</button>}
    </div>
  );
};

export default Card;
