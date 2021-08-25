import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { useState } from 'react';

const PaginationComponent = ({ pageContent1, pageContent2, pageContent3, totalP, fromChar }) => {
    const handelPagination = (page) => {
        setCurrentP(page)
    }
    const [currentP, setCurrentP] = useState(1)
    return (
        <div className='pagination-component'>

            <div className={`page-conent ${currentP === 1 ? 'activePage' : ''}`} onClick={() => setCurrentP(1)}>{pageContent1}</div>
            <div className={`page-conent ${currentP === 2 ? 'activePage' : ''}`} onClick={() => setCurrentP(2)}>{pageContent2}</div>
            {!fromChar && <div className={`page-conent ${currentP === 3 ? 'activePage' : ''}`} onClick={() => setCurrentP(3)}>{pageContent3}</div>}
            <Pagination defaultCurrent={currentP} total={10 * totalP} onChange={(page) => handelPagination(page)} />
        </div>
    )
};

PaginationComponent.propTypes = {

};

export default PaginationComponent;

