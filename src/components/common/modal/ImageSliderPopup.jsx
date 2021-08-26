import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal, Carousel } from 'antd';
import { useState } from 'react';


const ImageSliderPopup = ({ visible, toggleVisibility, imagesPathArr, active, setActive, setActiveInd, activeIn }) => {
    const currentRef = useRef(null);
    console.log(active);
    const f = (i) => {
        setActive(i)


        console.log(4444444444444444, i);

    }
    const handleChange = (toNext) => {
        if (toNext) {
            console.log(active);
            setActive(active + 1);
            currentRef.current.next();
        } else {
            { active === 0 ? setActive(imagesPathArr.length - 1) : setActive(active - 1) };
            currentRef.current.prev();
        }

    }


    return (
        <Modal
            visible={visible}
            onCancel={toggleVisibility}
            footer={null}
            closable={false}
            className={'images-modal'}
            centered={true}
            maskStyle={{ background: '#000' }}

        >
            <div>
                <img
                    src='/assets/images/icons/right.svg'
                    className='arrow'
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
                    src='/assets/images/icons/left.svg'
                    className='arrow'
                    onClick={() => handleChange(true)}

                />
                {<div className='slider-down-image-container'>
                    {imagesPathArr?.map((image, i) => <div className={`image-box link ${i == active ? 'active-image-box' : ''}`} onClick={() => f(i, image)} >
                        <img src={image} />
                    </div>)}
                </div>}
            </div>
        </Modal>
    )
};
ImageSliderPopup.propTypes = {
    visible: PropTypes.bool.isRequired,
    toggleVisibility: PropTypes.func.isRequired,
    imagesPathArr: PropTypes.array.isRequired,
};
export default ImageSliderPopup;