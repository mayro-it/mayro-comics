import React from 'react'
import ImagesBoxContainer from '../../pages/ImagesBoxContainer';

const SecondCharacters = () => {
    const imagesArr = ['/assets/images/charecters/children/children1.png','/assets/images/charecters/children/children2.png',
    '/assets/images/charecters/children/children3.png','/assets/images/charecters/children/children4.png','/assets/images/charecters/children/children5.png',
    '/assets/images/charecters/children/children6.png','/assets/images/charecters/children/children7.png','/assets/images/charecters/children/children8.png',
    '/assets/images/charecters/children/children9.png'
];
    return (
        <div className='ilustrations-page'>
            <ImagesBoxContainer imagesArr={imagesArr} />
        </div>
    )
};


export default SecondCharacters;