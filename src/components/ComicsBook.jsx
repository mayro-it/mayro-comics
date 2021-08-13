import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Buttons from './common/buttons/Buttons';
import ConfirmationModal from './common/modal/ConfirmationModal';

const ComicsBook = ({ imgSrc, headerText, text, imagesArr }) => {
    const [visible, setVisble] = useState(false);
    return (
        <div className='comics-book-buy'>
            <div className='comics-book-img'>
                <img src={imgSrc} />
            </div>
            <div className='text-container'>
                <div className='text-header'>
                    {headerText}
                </div>
                <div className='text'>
                    {text}
                </div>
                <div className='lng-container'>
                    <span className='lng-header'>Languages:</span> <span>Armenian English Russian</span>
                </div>
                <div className='img-container'>
                    {imagesArr && imagesArr.map((img, i) =>
                        <div className='img' key={i}>
                            <img src={img} />
                        </div>
                    )}
                </div>
                <div className='btn'>
                    <Buttons classname='white-btn' text={'Subscribe'} handleChange={() => setVisble(true)} />
                </div>
            </div>
            <ConfirmationModal
                visible={visible}
                setVisible={setVisble}
            />
        </div>
    )
};

ComicsBook.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imagesArr: PropTypes.array,

};

export default ComicsBook;