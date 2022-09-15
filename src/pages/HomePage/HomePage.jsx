import News from '../../components/News/News';
import Schedule from '../../components/Schedule/Schedule';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-container'>
            <News />
            <Schedule />
        </div>
    );
}

export default HomePage;
