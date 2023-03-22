import { getCookie } from '@/utilities';
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  element: React.FC | React.ComponentClass;
  meta?: Record<string, any>;
};

const o = Object.create(null);

const PrivateRoute: React.FC<Props> = function ({ element: Component, meta = o, ...rest }) {
  const isLogin = getCookie('userToken') 
  const { pathname, search } = useLocation();
  const isLoginPage = pathname === '/' || pathname === '/login';
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
  setIsLoading(false);
  }
  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
    },[])
    
  if(!!isLogin && isLoginPage) {
    return <>{isLoading ? 'loading' :<Navigate to={`/import-nft`} replace />}</>;
  }

  if(meta.requiresAuth && !isLogin) {
    return <>{isLoading ? 'loading' :<Navigate to={`/login`} replace />}</>;
  }

  
  return <>{isLoading ? 'loading' : <Component {...rest} />}</>;
};

export default PrivateRoute;
