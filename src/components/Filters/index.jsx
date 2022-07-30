import './Filter.css';
import { useData } from './../../Hooks/DataContext';
import { useState } from 'react';

const Filter = ({ setNoResult, searchResult, setSearchResult }) => {
  const [choosenCity, setChoosenCity] = useState('All');
  const [range, setRange] = useState(10);
  const [choosenDate, setChoosenDate] = useState();
  const { data } = useData();
  const cities = data.map((item) => item.City);
  const handleCityChange = (e) => {
    setChoosenCity(e.target.value);
    let res;
    if (searchResult.length !== 0) {
      if (choosenCity === 'All') {
        res = searchResult;
      } else {
        res = searchResult.filter(
          (item) => item.City.toLowerCase() === choosenCity.toLowerCase()
        );
        if (res.length === 0) {
          setSearchResult([]);
          setNoResult(true);
        } else {
          setSearchResult(res);
          setNoResult(false);
        }
      }
    } else {
      if (choosenCity.toLowerCase() === 'all') {
        res = data;
      } else {
        res = data.filter(
          (item) => item.City.toLowerCase() === choosenCity.toLowerCase()
        );
        console.log('asd', res);
        if (res.length === 0) {
          setNoResult(true);
          setSearchResult([]);
        } else {
          setSearchResult(res);
          setNoResult(false);
        }
      }
    }
  };
  const handlePriceChange = (e) => {
    setRange(e.target.value);
  };
  const handleDateChange = (e) => {
    setChoosenDate(e.target.value);
  };
  return (
    <div className="filterContainer">
      <div className="cityFilter">
        city:
        <select
          name="cities"
          id="cities"
          onChange={handleCityChange}
          value={choosenCity}
        >
          <option value="All">All</option>
          {cities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      <div className="DateFilter">
        Price:
        <input
          type="range"
          onChange={handlePriceChange}
          min="10"
          max="1000"
          value={range}
        />
      </div>
      <div className="PriceFilter">
        Date:
        <input
          type="date"
          value={choosenDate}
          onChange={handleDateChange}
          id="date"
          name="date"
        />
      </div>
    </div>
  );
};

export default Filter;
