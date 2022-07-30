import { createContext, useContext, useState } from 'react';

const DataContext = createContext(null);
export const DataProvider = ({ info, children }) => {
  const [data, setData] = useState(info);
  const [booked, setBooked] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData, booked, setBooked }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
