// import AuthRoutes from './AuthRoutes';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
const RouterMain: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <Router>
      <AppRoutes />
    </Router>
  ) : <></>;
};

export default RouterMain;
