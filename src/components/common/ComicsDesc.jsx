import React from 'react';
import HomePageSlider from './HomePageSlider';
import PropTypes from 'prop-types';
import Buttons from './buttons/Buttons';
import CoverFlow from '../sliders/CoverFlow';


const ComicsDesc = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='comics-desc-container'>
            <div className='comics-desc-top'>
            </div>
            <div className='comics-desc-body'>
                <div className='slider-container'>
                    {/* <HomePageSlider imagesArr={imagesArr} /> */}
                    <CoverFlow />
                </div>
                <div className='comics-desc-content'>
                    <div className='comics-desc-content-header'>
                        <div className='background'>comics</div>
                        <div className='text-header'>Short comics</div>
                    </div>
                    <div className='text-content'>
                        The `Velvet Revolution`
                        comic book is about the events that took place in Armenia a year ago, and was later characterized as
                        `revolution` by people in Armenia.
                    </div>
                    <div className='btn-container'>
                        <Buttons
                            classname='white-btn'
                            text={'See More'}
                            handleChange={() => console.log('see more')}

                        />
                    </div>
                </div>

            </div>
            <div className='comics-desc-bottom'></div>
        </div>
    )
};

ComicsDesc.propTypes = {

};

export default ComicsDesc;

