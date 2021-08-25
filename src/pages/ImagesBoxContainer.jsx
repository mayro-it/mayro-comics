import React from 'react';
import PropTypes from 'prop-types';
import { ImagesBox } from '../components/ImagesBox';

const ImagesBoxContainer = ({ imagesArr }) => {
    return (
        <div className='near-me-posts-container'>
            <div className='near-me-post-container near-me-media-post-container'>

                {imagesArr.map((img, i) =>
                    <ImagesBox key={i} image={img} width={'100%'} height={'auto'} borderColor='unset' className='near-me-post-image' />
                )}
            </div>
        </div>
    )
};

ImagesBoxContainer.propTypes = {
    imagesArr: PropTypes.array,

};

export default ImagesBoxContainer;

