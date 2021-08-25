import React from 'react';
import FristCharacters from '../components/ilustrations/FirstCharacters';
import SecondCharacters from '../components/ilustrations/SecondCharacters';
import PaginationComponent from '../components/Pagination';

const IlustrationsPagination = () => {
    return (
        <div className='ilustrations-container'>
            <PaginationComponent
                pageContent1={<FristCharacters />}
                pageContent2={<SecondCharacters />}
                totalP={2}
                fromChar
            />

        </div>
    )
};



export default IlustrationsPagination;
