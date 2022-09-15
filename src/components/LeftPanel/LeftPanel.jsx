import './LeftPanel.css';
import homeImg from '../../assets/images/home.png';
import meetingImg from '../../assets/images/meeting.png';
import testImg from '../../assets/images/search.png';
import requestImg from '../../assets/images/request.png';
import graphImg from '../../assets/images/graph.png';
import userImg from '../../assets/images/user.jpg';
import smileImg from '../../assets/images/smiling.png';
import Tooltip from '../Tooltip/Tooltip';

const LeftPanel = function () {
    return (
        <section className='leftPanel'>
            <div className='leftPanel-list-item home'>
                <Tooltip content={'Home'}>
                    <img className='leftPanel-list-item-image' src={homeImg} alt="" />
                </Tooltip>
            </div>

            <ul className='leftPanel-list'>
                <li className='leftPanel-list-item'>
                    <Tooltip content={'1v1'}>
                        <img className='leftPanel-list-item-image' src={meetingImg} alt="" />
                    </Tooltip>
                </li>
                <li className='leftPanel-list-item'>
                    <Tooltip content={'Searching'}>
                        <img className='leftPanel-list-item-image' src={testImg} alt="" />
                    </Tooltip>
                </li>
                <li className='leftPanel-list-item'>
                    <Tooltip content={'Ask your HR'}>
                        <img className='leftPanel-list-item-image' src={requestImg} alt="" />
                    </Tooltip>
                </li>
                <li className='leftPanel-list-item'>
                    <Tooltip content={'Statistic'}>
                        <img className='leftPanel-list-item-image' src={graphImg} alt="" />
                    </Tooltip>
                </li>
            </ul>

            <div className='leftPanel-profile'>
                <div className="leftPanel-profile-status">
                    <Tooltip content={'Your current rate'}>
                        <img className="leftPanel-profile-status-image" src={smileImg} alt="" />
                    </Tooltip>
                </div>

                <div className="leftPanel-profile-icon">
                    <Tooltip content={'Profile'}>
                        <img className="leftPanel-profile-icon-image" src={userImg} alt="" />
                    </Tooltip>
                </div>
            </div>
        </section>
    );
}

export default LeftPanel;
