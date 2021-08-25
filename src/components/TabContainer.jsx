import React from 'react';
import { Tabs } from 'antd';
import IlustrationsPagination from '../pages/IlustrationsPagination';
import CharactersPagination from '../pages/CharactersPagination';

const { TabPane } = Tabs;

const TabContainer = () => {
    const callback = (key) => {
        console.log(key)
    }
    return (
        <div className='tab-container'>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Characters" key="1">
                    <CharactersPagination />
                </TabPane>
                <TabPane tab="Illustrations" key="2">
                    <IlustrationsPagination />
                </TabPane>
            </Tabs>
        </div>
    )
};

TabContainer.propTypes = {

};

export default TabContainer;

