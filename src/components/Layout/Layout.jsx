import React from 'react';
import Navbar from './Navbar';
import '../../styles/layout.css';

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            {children}
        </div>
    </>
  );
};

export default Layout;
