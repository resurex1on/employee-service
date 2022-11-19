import React from 'react';
import notFoundImage from '../../assets/images/browser.png'
import './NotFound.css'

const NotFound = ({content}) => {
    return (
        <div className="notFound">
            <img className='notFound-image' src={notFoundImage} />
            {content}
        </div>
    )
};

export default NotFound;

