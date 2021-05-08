import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='left-col'>
                <div className='logo-container'>
                    <Link to='/'><img src='/assets/images/logo.png' alt='logo' /></Link>
                </div>
            </div>
            <div className='right-col'>
                <nav >
                    <Link to='/about'>About us</Link>
                    <Link to='/about'>Comics</Link>
                    <Link to='/about'>Contact us</Link>
                </nav>
            </div>

        </header>
    )
}

Header.propTypes = {

}

export default Header

