import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

const HomePageSlider = ({ imagesArr }) => {
    const carousel = useRef(null);

    const [index, setIndex] = useState(0);
    const handleChange = () => {
        setIndex(index + 1);
    }

    const handleSliderChange = (isNext) => {
        if (isNext) {
            carousel.current.next();
            setIndex(index + 1);
        }
        else {
            carousel.current.prev();
            setIndex(index - 1);
        }
    };

    return (
        <div className='home-page-slider'>
            <Carousel
                afterChange={() => handleChange()}
                className='carousel-container'
                ref={carousel}
                dots={false}
            >
                {imagesArr?.map((image, i) => (<div key={i} className='carusel-item-container'>
                    <img className='image' src={image} />
                </div>))}
            </Carousel>
            <div className='buttons-container'>
                <div className='buttons-items link'>
                    <img className='arrow-icon' src={'/assets/images/icons/leftArrow.svg'} alt='Mayro Comics' onClick={() => handleSliderChange(false)} />
                    <img className='arrow-icon' src={'/assets/images/icons/rightArrow.svg'} alt='Mayro Comics' onClick={() => handleSliderChange(true)} />
                </div>
            </div>
        </div>
    )
};

HomePageSlider.propTypes = {
    imagesArr: PropTypes.array.isRequired,

};

export default HomePageSlider;

