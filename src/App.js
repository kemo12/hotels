import './App.css';
import RouterComponent from './Routes/Routes';
import { DataProvider } from './Hooks/DataContext';
function App() {
  const data = [
    {
      Name: 'City Star',
      Price: 1200,
      City: 'Gaza',
      date: new Date('2022', '8', '4'),
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'Dream',
      Price: 1200,
      City: 'Cairo',
      date: new Date('2022', '2', '14'),
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'Sun',
      Price: 1200,
      City: 'Ankara',
      date: new Date('2022', '1', '23'),
      src: 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    },
    {
      Name: 'LevelUp',
      Price: 1200,
      City: 'Doha',
      date: new Date('2022', '3', '12'),
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
