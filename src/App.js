import './App.css';
import RouterComponent from './Routes/Routes';
import { DataProvider } from './Hooks/DataContext';
function App() {
  const data = [
    {
      Name: 'City Star',
      Price: 200,
      City: 'Gaza',
      date: '2022-07-05',
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'Dream',
      Price: 1200,
      City: 'Cairo',
      date: '2022-07-06',
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'Sun',
      Price: 500,
      City: 'Ankara',
      date: '2022-07-08',
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'LevelUp',
      Price: 1170,
      City: 'Doha',
      date: '2022-07-04',
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
  ];
  return (
    <DataProvider info={data}>
      <div className="App">
        <RouterComponent />
      </div>
    </DataProvider>
  );
}

export default App;
