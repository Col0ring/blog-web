import React from 'react';
import Navbar from './Navbar';
const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: '900vh', position: 'relative' }}></div>
    </>
  );
};

export default Layout;
