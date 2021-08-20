import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Buttons from '../../components/common/buttons/Buttons';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomePageSlider from '../../components/common/HomePageSlider';
import ComicsIntroduction from '../../components/common/ComicsIntroduction';
import PageFooter from '../../components/common/PageFooter';
import EyeSliderContainer from '../../components/EyeSliderContainer';
import ComicsDesc from '../../components/common/ComicsDesc';
import ContactUs from '../../pages/ContactUs';
import ShortComics from '../../components/common/ShortComics';
import ComicsBook from '../../components/ComicsBook';
import ShorComicsPage from '../../pages/ShorComicsPage';


const MainRouter = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];

    return (
        <div className='main-container'>
            <Header />
            {/* <div className='main-container-header'> */}



            {/* </div> */}
            {/* <ComicsIntroduction coverName='01' headerText='“Velvet Revolution”' text='comics' />
            <EyeSliderContainer /> */}
            {/* <ContactUs /> */}
            {/* <ShortComics imagesArray={imagesArr} title={'Kkkkk'}/> */}
            {/* <ComicsBook imgSrc={'/assets/images/fake/slider1.png'} headerText={`“Tork Angegh”`}
                 imagesArr={imagesArr}
                 text={'MAYRO is an Armenian brand, which aimed to make Armenian characters famous and loved by you. Our dream is to spread the Armenian culture around the '} 
                /> 
            {/* <Footer /> */}
            <ShorComicsPage />
        </div>
    );
};

export default withRouter(MainRouter);