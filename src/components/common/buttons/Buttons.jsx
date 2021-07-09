import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Buttons = ({ classname, text, handleChange }) => {
    console.log(classname)
    return (
        <Button className={`red-btn ${classname} link`} onClick={handleChange}>
            {text}
        </Button>
    )
};

Buttons.propTypes = {
    classname: PropTypes.string,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,

};
export default Buttons;