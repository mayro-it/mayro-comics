import React from 'react';
import ShortComics from '../components/common/ShortComics';

const ShorComicsPage = () => {
    const imagesArrjazzve = ['/assets/images/shortcomics/jazzve/jazzve1.png',
        '/assets/images/shortcomics/jazzve/jazzve2.png', '/assets/images/shortcomics/jazzve/jazzve3.png'];
    const imagesArrGot = ['/assets/images/shortcomics/got/got1.png', '/assets/images/shortcomics/got/got2.png',
        '/assets/images/shortcomics/got/got3.png', '/assets/images/shortcomics/got/got4.png'];
    const imagesArrFS = ['/assets/images/shortcomics/fatherSon/papi1.png', '/assets/images/shortcomics/fatherSon/papi2.png',
        '/assets/images/shortcomics/fatherSon/papi3.png']
    return (
        <div className='short-comics-page'>
            <div className='short-comics-content'>
                <div className='page-header'>
                    <div className='comics-desc-content-header'>
                        <div className='background'>comics</div>
                        <div className='text-header'>Short comics</div>
                    </div>
                </div>
                <ShortComics imagesArray={imagesArrjazzve} title='Jazzve' />
                <ShortComics imagesArray={imagesArrGot} title='Game Of Thrones' />
                <ShortComics imagesArray={imagesArrFS} title='Father and San' />
            </div>
        </div>

    )
};

export default ShorComicsPage;