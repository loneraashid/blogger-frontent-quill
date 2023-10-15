import React from 'react';
import preloader from '../../assets/images/preloader.svg'
import './loader.css'
const LoadingComponent = () => {
    return (
        <div className='loader-main'
        
        >
            <div className='preloader-img' style={{ backgroundImage: `url(${preloader})` }}></div>
        </div>
    );
};

export default LoadingComponent;