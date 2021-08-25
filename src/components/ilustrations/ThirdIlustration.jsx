import React from 'react';
import PropTypes from 'prop-types';
import ImagesBoxContainer from '../../pages/ImagesBoxContainer';

const ThirdIlustration = () => {
    const imagesArr = ['/assets/images/thirdIlustrations/comics_1.png', '/assets/images/thirdIlustrations/Group 116.png',
        '/assets/images/thirdIlustrations/sketch_5 1.png'];
    return (
        <div className='ilustrations-page'>
            <ImagesBoxContainer
                imagesArr={imagesArr}
            />
        </div>
    )
};

ThirdIlustration.propTypes = {

};

export default ThirdIlustration;