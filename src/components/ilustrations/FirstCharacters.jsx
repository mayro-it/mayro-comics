import React from 'react'
import PropTypes from 'prop-types'
import ImagesBoxContainer from '../../pages/ImagesBoxContainer';

const FristCharacters = () => {
    const imagesArr = ['/assets/images/charecters/firstcharacters/Rectangle 1.png', '/assets/images/charecters/firstcharacters/Rectangle 2.png',
        '/assets/images/charecters/firstcharacters/Rectangle 3.png', '/assets/images/charecters/firstcharacters/Rectangle 4.png',
        '/assets/images/charecters/firstcharacters/Rectangle 5.png', '/assets/images/charecters/firstcharacters/Rectangle 6.png'];
    return (
        <div className='ilustrations-page'>
            <ImagesBoxContainer imagesArr={imagesArr} />
        </div>
    )
};

FristCharacters.propTypes = {

};

export default FristCharacters;
