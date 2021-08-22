import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
    const path = window.location.pathname;
    const pageURL = path.split('/');
    console.log(window.location.pathname)
    const [activeTab, setActiveTab] = useState(pageURL[pageURL.length - 1]);
    return (
        <header className={`header ${path === '/contact' && 'headerNew' || path === '/about' && 'headerNew'}`}>
            <div className='left-col'>
                <div className='logo-container'>
                    <Link to='/'>
                        <img src='/assets/images/logo.png' alt='logo' />
                    </Link>
                </div>
            </div>
            <div className='right-col'>
                <nav>
                    <Link to='/about' onClick={() => setActiveTab('about')}>
                        <span>  About us</span>
                        <div className={`${activeTab === 'about' ? 'selected-tab' : ''}`}></div>
                    </Link>
                    <Link to='/comics' onClick={() => setActiveTab('comics')}>
                        <span> Comics</span>
                        <div className={`${activeTab === 'comics' ? 'selected-tab' : ''}`}></div>
                    </Link>
                    <Link to='/contact'>
                        <span>Contact us</span>
                        <div className={`${activeTab === 'contact' ? 'selected-tab' : ''}`}></div>
                    </Link>
                </nav>
            </div>
        </header>
    )
};

Header.propTypes = {

};

export default Header;

