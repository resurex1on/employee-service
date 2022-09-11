import './LeftPanel.css';
import homeImg from '../../assets/images/home.png'; 
import meetingImg from '../../assets/images/meeting.png'; 
import testImg from '../../assets/images/search.png'; 
import requestImg from '../../assets/images/request.png'; 
import graphImg from '../../assets/images/graph.png'; 
import userImg from '../../assets/images/user.jpg'; 
import smileImg from '../../assets/images/smiling.png';

const LeftPanel = function () {
    return (
        <section className='leftPanel'>
            <div className='leftPanel-list-item home'> <img className='leftPanel-list-item-image' src={homeImg} alt="" /></div>

            <ul className='leftPanel-list'>
                <li className='leftPanel-list-item'> <img className='leftPanel-list-item-image' src={meetingImg} alt="" /></li>
                <li className='leftPanel-list-item'> <img className='leftPanel-list-item-image' src={testImg} alt="" /></li>
                <li className='leftPanel-list-item'> <img className='leftPanel-list-item-image' src={requestImg} alt="" /></li>
                <li className='leftPanel-list-item'> <img className='leftPanel-list-item-image' src={graphImg} alt="" /></li>
            </ul>

            <div className='leftPanel-profile'>
            <div className="leftPanel-profile-status">
                    <img className="leftPanel-profile-status-image" src={smileImg} alt="" />
                </div>

                <div className="leftPanel-profile-icon">
                    <img className="leftPanel-profile-icon-image" src={userImg} alt="" />
                </div>
            </div>
        </section>
    );
}

export default LeftPanel;
