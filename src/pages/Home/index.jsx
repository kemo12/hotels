import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import { useData } from './../../Hooks/DataContext';
import Card from './../../components/Card';
import './Home.css';
import { Link } from 'react-router-dom';
import Filter from '../../components/Filters';
const Home = () => {
  const { data } = useData();
  const [searchResult, setSearchResult] = useState([]);
  const [noResult, setNoResult] = useState(false);

  return (
    <div className="homeContainer">
      <div className="homeTilte">
        <h1>Hotels</h1>
        <Link className="" to="/Reserved">
          my reservations
        </Link>
      </div>
      <div className="homeSearch">
        <SearchBar
          placeholder="Search By Name..."
          setSearchResult={setSearchResult}
          setNoResult={setNoResult}
          searchResult={searchResult}
        />
      </div>
      <div className="searchFilter">
        <Filter
          setNoResult={setNoResult}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
      </div>
      <div className="cardsContainer">
        {!noResult ? (
          (searchResult.length === 0 ? data : searchResult).map((card) => {
            return <Card isAdmain={false} cardInfo={card} key={card.Name} />;
          })
        ) : (
          <div> there is no result</div>
        )}
      </div>
    </div>
  );
};

export default Home;
