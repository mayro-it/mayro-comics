import React, { useState } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const { Option } = Select;
    const history = useHistory();
    const path = window.location.pathname;
    const pageURL = path.split('/');
    const [activeTab, setActiveTab] = useState(pageURL[pageURL.length - 1]);
    const handleRedirect = (value) => {
        history.push(`/${value}`)
    };
    return (
        <header className={`header ${path === '/contact' && 'headerNew' || path === '/about' && 'headerNew'
            || path === '/illustrations' && 'headerNew'}`}>
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
                    {/* <Link to='/comics' onClick={() => setActiveTab('comics')}>
                        <span> Comics</span>
                        <div className={`${activeTab === 'comics' ? 'selected-tab' : ''}`}></div>
                    </Link> */}
                    <Select
                        className={'select-box'}
                        defaultValue="Comics"
                        onChange={handleRedirect}
                        suffixIcon={< img src='/assets/images/icons/arrowRed.svg' />}
                        bordered={false}
                        onClick={()=>setActiveTab('')}
                    >
                        <Option value='comic-book'>Comic Books</Option>
                        <Option value='short-comics' >Short Comics</Option>
                        <Option value='illustrations'>Illustrations</Option>
                    </Select>
                    <Link to='/contact'>
                        <span>Contact us</span>
                        <div className={`${activeTab === 'contact' ? 'selected-tab' : ''}`}></div>
                    </Link>

                </nav>
            </div>
        </header >
    )
};

export default Header;