import Navber from '@/component/shared/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Navber></Navber>
        {children}
        </>
    );
};

export default MainLayout;