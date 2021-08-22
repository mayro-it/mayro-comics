import React from 'react';
import PropTypes from 'prop-types';
import EyeSliderContainer from '../components/EyeSliderContainer';
import HomePageSlider from '../components/common/HomePageSlider';

const AboutUs = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='about-us-container'>
            <div className='about-us-top'>
                <div className='about-us-top-content'>
                    <div className='about-us-header'>
                        <div  > About us
                        </div>
                        <div className='underLine'></div>
                    </div>
                    <div className='about-us-text'>
                        MAYRO is an Armenian brand, which aimed to make Armenian characters famous and loved by you. Our dream is to spread the
                        Armenian culture around the world and make it recognizable. MAYRO is an Armenian brand, which aimed to make Armenian
                        characters famous and loved by you. Our dream is to spread the Armenian
                        culture around the world and make it recognizable.
                    </div>
                </div>
            </div>
            <div className='vision-container'>
                <div className='images-container'>
                    <div className='background-img img'>
                        <img src='/assets/images/visionImg1.png' />
                    </div>
                    <div className='front-img img'>
                        <img src='/assets/images/visionImg2.png' />
                    </div>
                </div>
                <div className='vision-text-container'>
                    <div className='comics-desc-content-header'>
                        <div className='background'>visions</div>
                        <div className='text-header'>Our visions</div>
                    </div>
                    <div className='text-container'>
                        <div className='cover-text-container'>
                            <div className='cover-text'>1</div>
                            <div className='cover-text-body'>
                                <span>
                                    The Velvet Revolution comic book is about the events that took place in Armenia a year ago,
                                    and was later characterized as revolution by people in Armenia. This is not a story about politicians,
                                    or about the development
                                </span>
                            </div>
                        </div>
                        <div className='cover-text-container'>
                            <div className='cover-text'>2</div>
                            <div className='cover-text-body'>
                                <span>
                                    The Velvet Revolution comic book is about the events that took place in Armenia a year ago,
                                    and was later characterized as revolution by people in Armenia. This is not a story about politicians,
                                    or about the development
                                </span>
                            </div>
                        </div>
                        <div className='cover-text-container'>
                            <div className='cover-text'>3</div>
                            <div className='cover-text-body'>
                                <span>
                                    The Velvet Revolution comic book is about the events that took place in Armenia a year ago,
                                    and was later characterized as revolution by people in Armenia. This is not a story about politicians,
                                    or about the development
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='slider-container'>
                <div className='text-slider'>
                    <EyeSliderContainer />
                </div>
                <div className='images-slider'>
                    <HomePageSlider imagesArr={imagesArr} />
                </div>

            </div>
        </div>
    )
};


export default AboutUs;

