import { IRouter } from '@/model';
import React, { ReactNode } from 'react';
import Login from './page/Login';


export const RouterAuth: IRouter[] = [
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/login',
    element: <Login />
  }
]

