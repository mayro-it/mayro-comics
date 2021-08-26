import React from 'react';
import { withRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ShorComicsPage from '../../pages/ShorComicsPage';
import HomePage from '../../pages/HomePage';
import AboutUs from '../../pages/AboutUs';
import ComicsBookPage from '../../pages/ComicsBookPage';
import ContactUs from '../../pages/ContactUs';
import CharachtersIlustrationsPage from '../../pages/CharachtersIlustrationsPage';


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
                    <Route path={'/comic-book'} component={ComicsBookPage} />
                    <Route path={'/short-comics'} component={ShorComicsPage} />
                    <Route path={'/illustrations'} component={CharachtersIlustrationsPage} />
                    <Route path={`/`} component={HomePage} />
                </Switch>
            </section>
            <Footer />


        </div>
    );
};

export default withRouter(MainRouter);