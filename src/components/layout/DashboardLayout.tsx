import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

export interface IDashboardLayoutProps {
}

export default function DashboardLayout (props: IDashboardLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
