import './Dashboard.css';
import { useData } from './../../Hooks/DataContext';
import Card from '../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const { data } = useData();
  let navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem('isLogin') === '0' ||
      localStorage.getItem('isLogin') === null
    ) {
      navigate('/login');
    }
  });
  return (
    <div className="dashboardContainer">
      <h1>Hotels</h1>
      <Link to="/addnew">Add new</Link>
      <div className="cardsContainer">
        {data.map((card) => {
          return <Card isAdmain={true} cardInfo={card} key={card.Name} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
