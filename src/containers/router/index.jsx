import React from 'react';
import { withRouter } from "react-router-dom";
import Buttons from '../../components/common/buttons/Buttons';
import Header from '../../components/Header';

const MainRouter = () => {

    return (
        <div className='main-container'>
          <Header />
        </div>
    );
};

export default withRouter(MainRouter);
