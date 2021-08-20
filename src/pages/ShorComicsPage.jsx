import React from 'react';
import ShortComics from '../components/common/ShortComics';

const ShorComicsPage = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='short-comics-page'>
            <div className='comics-desc-content-header'>
                <div className='background'>comics</div>
                <div className='text-header'>Short comics</div>
            </div>
            <ShortComics imagesArray={imagesArr} title='Jazzve'/>
            <ShortComics  imagesArray={imagesArr} title='Jazzve'/>
        </div>

    )
};

export default ShorComicsPage;

