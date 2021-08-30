import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Carousel } from 'antd';
import { useState } from 'react';


const ImageSliderPopup = ({ visible, toggleVisibility, imagesPathArr, active, setActive, setActiveInd, activeIn }) => {
    const currentRef = useRef(null);
    const handleClick = (i) => {
        setActive(i)
    };
    const handleChange = (toNext) => {
        if (toNext) {
            { active === imagesPathArr.length - 1 ? setActive(0) : setActive(active + 1) };
            currentRef.current.next();
        } else {
            { active === 0 ? setActive(imagesPathArr.length - 1) : setActive(active - 1) };
            currentRef.current.prev();
        }
    };
    return (
        <Modal
            visible={visible}
            onCancel={toggleVisibility}
            footer={null}
            className={'images-modal'}
            centered={true}
            maskStyle={{ background: '#000' }}

        >
            <>
                <div className='slider-container'>
                    <img
                        src='/assets/images/icons/left.svg'
                        className='arrow link'
                        onClick={() => handleChange()}

                    />
                    <Carousel
                        className='carousel-container'
                        dots={false}
                        ref={currentRef}

                    >
                        {imagesPathArr.map((image, i) => (
                            <div key={image} className='modal-carousel-image-container' onClick={() => setActiveInd(i)}>
                                {<img src={imagesPathArr[active]} />}
                            </div>))}
                    </Carousel>
                    <img
                        src='/assets/images/icons/right.svg'
                        className='arrow link'
                        onClick={() => handleChange(true)}

                    />
                </div>
                {<div className='slider-down-image-container'>
                    {imagesPathArr?.map((image, i) =>
                        <div key={i}
                            className={`image-box link ${i == active ? 'active-image-box' : ''}`}
                            onClick={() => handleClick(i)}
                        >
                            <img src={image} />
                        </div>)}
                </div>}
            </>
        </Modal>
    )
};
ImageSliderPopup.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleVisibility: PropTypes.func.isRequired,
    imagesPathArr: PropTypes.array.isRequired,
    setActive: PropTypes.func,
    active: PropTypes.number,
    setActiveInd: PropTypes.func,
    activeIn: PropTypes.number,
};
export default ImageSliderPopup;