import React from 'react';
import { RouterAuth } from '../feature/auth';
import { useRoutes } from 'react-router-dom';
import { RouterImport } from '@/feature/import';
import PrivateRoute from '@/middleware/PrivateRouter';
import LoginLayout from '@/components/layout/LoginLayout';
import DashboardLayout from '@/components/layout/DashboardLayout';


const AuthRoutes: React.FC = () => {
  const elements = useRoutes([
    {
      element:<PrivateRoute 
                element={LoginLayout}
              />,
      children:[
        ...RouterAuth,
      ]
    },
    {
      element: <PrivateRoute 
                element={DashboardLayout}
                  meta={{
                    requiresAuth: true,
                  }}
                />,
      children:[
        ...RouterImport,
      ]
    }
  ]);

  return elements;
};

export default AuthRoutes;
