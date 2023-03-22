import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

export interface ILoginLayoutProps {
}

export default function LoginLayout (props: ILoginLayoutProps) {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
