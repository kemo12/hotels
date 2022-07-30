import { createContext, useContext, useState } from 'react';

const DataContext = createContext(null);
export const DataProvider = ({ info, children }) => {
  const [data, setData] = useState(info);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
