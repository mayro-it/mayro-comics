import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PropTypes from 'prop-types';

const ShortComics = ({ title, imagesArray }) => {

    return (
        <div className='short-comics-container'>
            <div className='short-comics-title'>{title}</div>
            <Splide
                options={{
                    width: 800,
                    perPage: 3,
                    perMove: 1,
                    rewind: true,
                    gap: 20,
                    pagination: false,
                   
                    arrowPath: 'M0.23 1.77L2 0L12 10L2 20L0.23 18.23L8.46 10L0.23 1.77Z',
                   
                    
                }
                }
            >
                <SplideSlide>
                    <img src="/assets/images/fake/slider1.png" alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src="/assets/images/fake/slider2.png" alt="Image 1" />
                </SplideSlide>
            </Splide>

        </div>
    )
};

ShortComics.propTypes = {
    title: PropTypes.string.isRequired,
    imagesArray: PropTypes.array.isRequired,

};

export default ShortComics;