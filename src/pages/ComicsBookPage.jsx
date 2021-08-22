import React from 'react';
import ComicsBook from '../components/ComicsBook';


const ComicsBookPage = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='comics-book-page'>
            <div className='comics-book-container'>
                <div className='page-header'>
                    <div className='comics-desc-content-header'>
                        <div className='background'>books</div>
                        <div className='text-header'>COMIC BOOKS</div>
                    </div>
                </div>
                <div className='comic-book-content'>
                    <ComicsBook
                        imgSrc='/assets/images/torkAngex.png'
                        headerText='“Tork Angegh”'
                        text='MAYRO is an Armenian brand, which aimed to make Armenian characters famous and loved by you. 
                  Our dream is to spread the Armenian culture around the '
                        imagesArr={imagesArr}
                    />
                </div>
                <div className='comic-book-content'>
                    <ComicsBook
                        imgSrc='/assets/images/velvet1.png'
                        headerText='“Velvet Revolution”'
                        text='MAYRO is an Armenian brand, which aimed to make Armenian characters famous and loved by you. 
                   Our dream is to spread the Armenian culture around the '
                        imagesArr={imagesArr}
                    />
                </div>
            </div>
        </div>
    )
};

ComicsBookPage.propTypes = {

};

export default ComicsBookPage;