import React from 'react';
import ComicsDesc from '../components/common/ComicsDesc';
import ComicsIntroduction from '../components/common/ComicsIntroduction';
import HomePageSlider from '../components/common/HomePageSlider';
import PageFooter from '../components/common/PageFooter';

const HomePage = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];
    return (
        <div className='home-page'>
            <div className='home-page-top'>
                <ComicsIntroduction
                    coverName='01'
                    headerText='“Velvet Revolution”'
                    text='comics'
                    btnText='Buy now'
                    shortText='The "Velvet Revolution" comic book is about the events that took 
                    place in Armenia a year ago, and was later characterized as "revolution" by people in Armenia. '
                    isVisible
                />
                <HomePageSlider imagesArr={imagesArr} />
            </div>
            <ComicsDesc />
            <div className='home-page-top hame-page-cooparate'>
                <ComicsIntroduction
                    headerText='Cooperate is'
                    text='great'
                    btnText={'Learn More'}
                    shortText='The "Velvet Revolution" comic book is about the events that took place in Armenia a year ago, and was later 
                    characterized as "revolution" by people in Armenia. This is not a story about politicians, or about the development of 
                    political movements in the country, or a revolution or a change of power, instead its a story about the victory of the people and peace. '
                />
                <HomePageSlider imagesArr={imagesArr} />
            </div>
            <div className='home-page-image'>
                <img src='/assets/images/homePage.png' alt='home page image' />
            </div>
            <PageFooter />

        </div>
    )
};


export default HomePage;