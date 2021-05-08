import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Buttons = ({classname}) => {
    return (
        <Button className={`red-btn ${classname} link`}>
            Learn More
        </Button>
    )
};

Buttons.propTypes = {
    classname: PropTypes.string,

};
export default Buttons;