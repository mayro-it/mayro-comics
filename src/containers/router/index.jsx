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


const MainRouter = () => {
    const imagesArr = ['/assets/images/fake/slider1.png', '/assets/images/fake/slider2.png'];

    return (
        <div className='main-container'>
               <Header />
            <div className='main-container-header'>
                {/* <img src='/assets/images/footer-shadow.png'/> */}
                {/* <img src='/assets/images/contactUs.png' /> */}

             
            </div>
            {/* <ComicsIntroduction coverName='01' headerText='“Velvet Revolution”' text='comics' />
            <EyeSliderContainer /> */}
            <ContactUs />
            {/* <Footer /> */}
        </div>
    );
};

export default withRouter(MainRouter);