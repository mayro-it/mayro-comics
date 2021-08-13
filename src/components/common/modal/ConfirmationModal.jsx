import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input } from 'antd';

const ConfirmationModal = ({ visible, setVisible }) => {
    const { Search } = Input;
    return (
        <Modal
            className='confirmation-modal'
            visible={visible}
            setVisible={setVisible}
            centered={true}
            footer={null}
            onCancel={() => setVisible(false)}
            maskStyle={{background: 'rgba(0, 0, 0, 0.9)'}}
        >
            <div className='confirmation-body'>
                <div className='image-container'>
                    <img src='/assets/images/confirmation.png' />
                </div>
                <div className='text-container'>
                    <div className='confirmation-header'>Get Notified When The Book will be on sale </div>
                    <Search
                        enterButton='Subscribe'
                        placeholder='Email'
                    />
                </div>

            </div>
        </Modal>
    )
};

ConfirmationModal.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func,

};

export default ConfirmationModal;

