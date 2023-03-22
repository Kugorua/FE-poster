
import { ReactNode } from 'react';
type ListMenu = {
  path: string;
  icon: ReactNode;
  name: string;
  children?: {
    path: string;
    name: string;
  }[];
};
export const MENU_LIST:ListMenu[] = [
  {
    path:'/home',
    name: 'Home Page',
    icon: <></>
  }
]