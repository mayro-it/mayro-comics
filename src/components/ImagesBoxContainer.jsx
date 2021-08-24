import React from 'react';
import PropTypes from 'prop-types';
import { ImagesBox } from './ImagesBox';

const ImagesBoxContainer = () => {
    const imagesArr = ['/assets/images/children/Աստղի_երեխա.jpg', '/assets/images/children/Աստղիկ.jpg', '/assets/images/children/լիլիթ.png', 
    '/assets/images/children/մայրոտղա.png','/assets/images/children/Նանե.png','/assets/images/children/նարե.png'];

    return (
        <div className='near-me-posts-container'>
            <div className='near-me-post-container near-me-media-post-container'>

                {imagesArr.map((img, i) => <ImagesBox key={i} image={img} width={'100%'} height={'auto'} borderColor='unset' className='near-me-post-image' />)}
            </div>)
        </div>
    )
}

ImagesBoxContainer.propTypes = {

}

export default ImagesBoxContainer

