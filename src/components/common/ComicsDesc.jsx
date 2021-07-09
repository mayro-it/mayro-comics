import React from 'react';
import HomePageSlider from './HomePageSlider';
import PropTypes from 'prop-types';


const ComicsDesc = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='comics-desc-container'>
            <div className='comics-desc-body'>
                <div className='slider-container'>
                    <HomePageSlider imagesArr={imagesArr} />
                </div>
                <div className='comics-desc-content'>
                    <div className='comics-desc-content-header'>
                        <div className='background'>comics</div>
                        <div className='text-header'>Short comics</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ComicsDesc.propTypes = {

};

export default ComicsDesc;

