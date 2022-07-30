import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNew.css';
import { useData } from './../../Hooks/DataContext';
import { Link } from 'react-router-dom';

const AddNew = () => {
  const { data, setData } = useData();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, seDate] = useState('');
  const [city, seCity] = useState('');
  const [src, setSrc] = useState('');
  let navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    let hotelData = {
      Name: name,
      Price: price,
      City: city,
      date: date,
      src: src,
    };
    setData([...data, hotelData]);
    navigate('/dashboard');
  };
  useEffect(() => {
    if (
      localStorage.getItem('isLogin') === '0' ||
      localStorage.getItem('isLogin') === null
    ) {
      navigate('/login');
    }
  });
  return (
    <div className="AddContanier">
      <Link className="Link" to="/dashboard">
        back to dashboard
      </Link>
      <h1>Add Hotel</h1>

      <form onSubmit={handleAdd}>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter hotel name..."
        />
        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter Price"
        />
        <input
          required
          value={date}
          onChange={(e) => seDate(e.target.value)}
          type="date"
          placeholder="Enter Date"
        />
        <input
          required
          value={city}
          onChange={(e) => seCity(e.target.value)}
          type="text"
          placeholder="Enter city"
        />
        <input
          type="text"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          placeholder="Enter Image Src..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNew;
