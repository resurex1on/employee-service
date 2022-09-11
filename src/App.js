import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LeftPanel from './components/LeftPanel/LeftPanel';

const App = function () {
  return (
    <>
      <Header />
      <div className='app-container'>
        <div className='app-container-panel'>
        <LeftPanel />
        </div>

        <div className='app-container-content'>
        <HomePage />
        </div>
        
      </div>
      
    </>
  );
}

export default App;
