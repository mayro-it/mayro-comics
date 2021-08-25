import React from 'react'
import PropTypes from 'prop-types'
import ImagesBoxContainer from '../../pages/ImagesBoxContainer'

const SecondIlustrations = () => {
    const imagesArr = ['/assets/images/secondIlustrations/Rectangle 321.png',   '/assets/images/secondIlustrations/Rectangle 324.png', 
   '/assets/images/secondIlustrations/Rectangle 323.png', '/assets/images/secondIlustrations/Rectangle 322.png',
        '/assets/images/secondIlustrations/Rectangle 325.png', '/assets/images/secondIlustrations/Rectangle 326.png'];
    return (
        <div className='ilustrations-page'>
            <ImagesBoxContainer imagesArr={imagesArr} />
        </div>
    )
}

SecondIlustrations.propTypes = {

}

export default SecondIlustrations

