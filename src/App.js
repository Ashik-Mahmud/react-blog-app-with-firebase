import './App.css';
import Header from './components/Header/Header';

const App = () => {
  const data = {name: 'Ashik Mahmud', dob: '13 jan, 2003', designation: 'full-stack dev'}
  return (
    <>
      <Header {...data} />
    </>
  );
}

export default App;
