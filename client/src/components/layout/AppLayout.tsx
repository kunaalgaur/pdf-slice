import React from 'react';
import Topbar from '../shared/Topbar/Topbar';
import Footer from '../shared/Footer/Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Topbar />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
