import React from 'react';
import { Navbar } from './_components/navbar';
import Footer from './_components/footer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
