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
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutUs from '../../pages/AboutUs';


const MainRouter = () => {
    const pageURL = window.location.pathname;
    console.log(pageURL)
    return (
        <div className='main-container'>
            <Header />
            {pageURL === '/contact' && <div className='main-container-header '></div>}
            <section style={{ 'minHeight': '100vh' }}>
                <Switch >
                    <Route path={`/contact`} component={ContactUs} />
                    <Route path={`/about`} component={AboutUs} />
                    <Route path={`/`} component={HomePage} />
                </Switch>
            </section>
            <Footer />
        </div>
    );
};

export default withRouter(MainRouter);