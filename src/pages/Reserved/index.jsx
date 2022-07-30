import './Reserved.css';
import './../Dashboard/Dashboard.css';
import { useData } from './../../Hooks/DataContext';
import Card from '../../components/Card';
import { Link } from 'react-router-dom';
const Reserved = () => {
  const { booked } = useData();

  return (
    <div>
      <div className="dashboardContainer">
        <h1>My reservations</h1>
        <Link className="Link" to="/">
          Back to Home
        </Link>
        <div className="cardsContainer">
          {booked.length !== 0 ? (
            booked.map((card) => {
              return <Card isAdmain={true} cardInfo={card} key={card.Name} />;
            })
          ) : (
            <h3>there is no Reserved hotels</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reserved;
