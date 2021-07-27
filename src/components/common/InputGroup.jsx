/* eslint-disable react/display-name */
import React, { memo } from 'react';
import PropType from 'prop-types';
import { Input } from 'antd';
const { TextArea } = Input;

const InputGroup = memo(({ value, handleChange, name, textArea, type = 'text', placeHolder }) => {

    return (
        <div className='input-group'>
            {textArea ?
                <TextArea name={name} onChange={handleChange} value={value} style={{ height: '200px' }} placeholder={placeHolder} />
                : <Input name={name} onChange={handleChange} value={value} type={type} placeholder={placeHolder} />}
        </div>
    )
});

InputGroup.propTypes = {
    label: PropType.string,
    value: PropType.oneOfType([PropType.string, PropType.number]).isRequired,
    name: PropType.string.isRequired,
    type: PropType.string,
    handleChange: PropType.func.isRequired,
    textArea: PropType.bool,
    placeHolder: PropType.string,
};
export default InputGroup;