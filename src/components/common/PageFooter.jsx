import React from 'react';

const PageFooter = () => {
    return (
        <div className='page-footer-container'>
            <div className='page-footer-header'>
                Why read comic books ?
            </div>
            <div className='page-footer-body'>
                <div className='cover-text-container'>
                    <div className='cover-text'>1</div>
                    <div className='cover-text-body'>
                        <span>Theye Are More</span>
                        <span>than Just Superhero Stories</span>
                    </div>
                </div>
                <div className='cover-text-container'>
                    <div className='cover-text'>2</div>
                    <div className='cover-text-body'>
                        <span> They Help Us</span>
                        <span>To Think Differently</span>
                    </div>
                </div>
                <div className='cover-text-container'>
                    <div className='cover-text'>3</div>
                    <div className='cover-text-body'>
                        <span>They Help People</span>
                        <span> Learn to Love Reading</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PageFooter;