import React from 'react'
import PropTypes from 'prop-types'
import ImagesBoxContainer from '../../pages/ImagesBoxContainer';

const FristIlustrations = () => {
    const imagesArr = ['/assets/images/firstIlustrations/Rectangle 307.png', '/assets/images/firstIlustrations/Rectangle 308.png',
        '/assets/images/firstIlustrations/Rectangle 309.png', '/assets/images/firstIlustrations/Rectangle 310.png',
        '/assets/images/firstIlustrations/Rectangle 311.png', '/assets/images/firstIlustrations/Rectangle 312.png'];
    return (
        <div className='ilustrations-page'>
            <ImagesBoxContainer imagesArr={imagesArr} />
        </div>
    )
};


export default FristIlustrations;