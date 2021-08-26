import React from 'react';
import Buttons from '../components/common/buttons/Buttons';
import TabContainer from '../components/TabContainer';

const CharachtersIlustrationsPage = () => {
    return (
        <div className='charachters-ilustrtaion-page'>
            <div className='charachters-ilustrtaion-top'>
                <div className='charachters-ilustrtaion-top-content'>
                    <div className='cover-name-header'>
                        <div className='first-text'>Your Text</div>
                        <div className='second-text'>
                            <div className='underLine'></div>
                            <div>text</div>
                        </div>
                    </div>
                    <div className='charachters-ilustrtaion-text'>
                        MAYRO is an Armenian brand, which aimed to make Armenian characters famous and loved by you. Our dream is to spread the
                        Armenian culture around the world and make it recognizable. MAYRO is an Armenian brand, which aimed to make Armenian
                        characters famous and loved by you. Our dream is to spread the Armenian
                        culture around the world and make it recognizable.
                    </div>
                    <Buttons
                        text='Buy now'
                        classname='white-btn'
                        handleChange={() => console.log(444)}
                    />
                </div>
            </div>
            <TabContainer />
        </div>
    )
};



export default CharachtersIlustrationsPage;
