import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import EyeSlider from './common/EyeSlider';

const EyeSliderContainer = () => {
    const imagesArr = ['Presentation of our  first comic book.', 'Presentation of ourfirst comic book.'];
    const textArr = ['The "Velvet Revolution" comic book is about the events that took place in Armenia a year ago', 'and was later characterized as "revolution" by people in Armenia.']
    const currentRef = useRef(null)
    const [activeItem, setActiveItem] = useState(0);
    const handleSetActive = (index) => {
        setActiveItem(index);
        currentRef.current.goTo(index);
    };
    return (
        <div className='eye-slider-content'>
          

            <div className='eye-slider-body'>
                {imagesArr.map((item, index) => <EyeSlider
                    showedItemsCount={imagesArr.length}
                    key={index}
                    index={index}
                    active={activeItem}
                    setActive={() => handleSetActive(index)}
                    item={item}
                    currentRef={currentRef}
                    imagesArr={imagesArr}
                />)}
            </div>
            <Carousel
                effect='fade'
                ref={currentRef}
                dots={false}
                className='carousel'
            >
                {imagesArr && imagesArr.map((desc, i) => {
                    return <div key={i} className='carousel-text'>
                        <span className='text-header'>{desc}</span>
                        <span className='text'>{textArr[i]}</span>

                    </div>
                })}
            </Carousel>
        </div>
    )
};

export default EyeSliderContainer;