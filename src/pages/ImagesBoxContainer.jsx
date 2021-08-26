import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImagesBox } from '../components/ImagesBox';
import ImageSliderPopup from '../components/common/modal/ImageSliderPopup';

const ImagesBoxContainer = ({ imagesArr }) => {
    const [active, setActive] = useState(0);
    const [visible, setVisble] = useState(false);
    const [activeIn, setActiveInd] = useState(0);
    const handleClick = (i) => {
        setActiveInd(i);
        setActive(i);
        setVisble(true);
    };
    return (
        <div className='near-me-posts-container'>
            <div className='near-me-post-container near-me-media-post-container'>

                {imagesArr.map((img, i) =>
                    <ImagesBox
                        key={i}
                        image={img}
                        width={'100%'}
                        height={'auto'}
                        borderColor='unset'
                        className='near-me-post-image'
                        onClick={() => handleClick(i)}
                    />
                )}
            </div>
            <ImageSliderPopup
                imagesPathArr={imagesArr}
                active={active}
                setActive={setActive}
                toggleVisibility={() => setVisble(!visible)} visible={visible}
                activeIn={activeIn}
                setActiveInd={setActiveInd}
            />
        </div>
    )
};

ImagesBoxContainer.propTypes = {
    imagesArr: PropTypes.array,

};

export default ImagesBoxContainer;

