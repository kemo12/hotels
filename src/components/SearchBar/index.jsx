import './SearchBar.css';
import { useData } from './../../Hooks/DataContext';
import { useState } from 'react';
const SearchBar = ({ setSearchResult, placeholder, setNoResult }) => {
  const { data } = useData();
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value !== '') {
      const res = data.filter((item) =>
        item.Name.toLowerCase().includes(e.target.value)
      );
      if (res.length === 0) {
        setNoResult(true);
      } else {
        setSearchResult(res);
        setNoResult(false);
      }
    } else {
      setSearchResult([]);
      setNoResult(false);
    }
  };
  return (
    <div className="SearchContainer">
      <input
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
