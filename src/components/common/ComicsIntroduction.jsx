import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons/Buttons';

const ComicsIntroduction = ({ coverName, headerText, text, shortText }) => {
    return (
        <div className='comics-intrioduction'>
            <div className='cover-name-container'>
                <div className={`cover-text `}>
                    {coverName}
                </div>
                <div className='cover-name-header'>
                    <div className='first-text'>{headerText}</div>
                    <div className='second-text'>
                        <div className='underLine'></div>
                        <div>{text}</div>
                    </div>
                </div>
            </div>
            <div className='text-container'>
                <span>{shortText}</span>
            </div>
            <Buttons
                text={'Buy now'}
            />

        </div>
    )
};
ComicsIntroduction.propTypes = {
    coverName: PropTypes.string.isRequired,
    headerText: PropTypes.string,
    shortText: PropTypes.string,
    text: PropTypes.string,
};
export default ComicsIntroduction;