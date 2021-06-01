import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Buttons = ({ classname, text }) => {
    return (
        <Button className={`red-btn ${classname} link`}>
            {text}
        </Button>
    )
};

Buttons.propTypes = {
    classname: PropTypes.string,
    text: PropTypes.string.isRequired,

};
export default Buttons;