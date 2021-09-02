import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

import { useSubscription } from "use-subscription";

const Footer = () => {
    const { Search } = Input;
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='footer-body'>
                <div className='footer-links'>
                    <div className='footer-links-header'>
                        Links
                    </div>
                    <div className='footer-links-items'>
                        <Link to='/about'>About us</Link>
                        <Link to='/comic-book'>Comic Books</Link>
                        <Link to='/short-comics'>Short Comics</Link>
                        <Link to='/illustrations'>Characters</Link>
                        <Link to='/contact'>Contact us</Link>
                    </div>
                </div>
                <div className='footer-links social'>
                    <div className='footer-links-header'>
                        Follow us
                    </div>
                    <div className='footer-links-items'>
                        <a href='https://www.facebook.com/mayro.comics' target="_blank" rel="noopener noreferrer" >Facebook</a>
                        <a href='https://www.instagram.com/mayro_comics/' target="_blank" rel="noopener noreferrer" >Instagram</a>
                        <a href='hhttps://www.linkedin.com/company/mayrocomics/about/' target="_blank" rel="noopener noreferrer" >Linkedin</a>
                    </div>
                </div>
                <div className="footer-subscribe-section footer-links">
                    <div className='footer-links-header'>
                        <span>Subscribe now</span>
                    </div>
                    <span className='sub-header'> Get the latest updates and offers</span>
                    <Search
                        placeholder="Email"
                        enterButton="Subscribe"
                        size="large"
                        onSearch={() => console.log(555)}
                        className='link'
                    />
                    <address className='contact-info'>
                        <a href="tel:+374 99 41211">374 99 00 00 00</a>
                        <a href="mailto:info@mayro.io">info@gmail.com</a>
                    </address>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className="footer-text">Developed by MAYRO IT</p>
                <p className="footer-text">Copyright &copy; {year} Mayro Comics. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer;

