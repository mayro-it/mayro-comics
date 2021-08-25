import React from 'react';
import PaginationComponent from '../components/Pagination';
import FristIlustrations from '../components/ilustrations/FristIlustrations';
import SecondIlustrations from '../components/ilustrations/SecondIlustrations';
import ThirdIlustration from '../components/ilustrations/ThirdIlustration';

const IlustrationsPagination = () => {
    return (
        <div className='ilustrations-container'>
            <PaginationComponent
                pageContent1={<FristIlustrations />}
                pageContent2={<SecondIlustrations />}
                pageContent3={<ThirdIlustration />}
                totalP={3}
            />

        </div>
    )
};



export default IlustrationsPagination;

