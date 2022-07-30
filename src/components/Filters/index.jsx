import './Filter.css';
import { useData } from './../../Hooks/DataContext';
import { useState } from 'react';

const Filter = ({ setNoResult, searchResult, setSearchResult }) => {
  const [choosenCity, setChoosenCity] = useState('');
  const [range, setRange] = useState(10);
  const { data } = useData();
  const cities = data.map((item) => item.City);
  const handleCityChange = (e) => {
    setChoosenCity(e.target.value);
    let res;
    if (e.target.value === '') {
      setSearchResult(...data);
    } else {
      res = data.filter((item) => {
        return item.City.toLowerCase() === e.target.value.toLowerCase();
      });
      if (res.length === 0) {
        setNoResult(true);
      } else {
        setSearchResult(res);
        setNoResult(false);
      }
    }
  };
  const handlePriceChange = (e) => {
    setRange(e.target.value);
    let res = data.filter(
      (item) => parseInt(e.target.value) >= parseInt(item.Price)
    );
    setSearchResult(res);
  };
  const handleDateChange = (e) => {
    let res = data.filter((item) => {
      return e.target.value === item.date;
    });
    setSearchResult(res);
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
          <option value="">select</option>
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
          max="2500"
          value={range}
        />
      </div>
      <div className="PriceFilter">
        Date:
        <input type="date" onChange={handleDateChange} id="date" name="date" />
      </div>
    </div>
  );
};

export default Filter;
