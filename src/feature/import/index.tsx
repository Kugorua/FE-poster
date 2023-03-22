import { IRouter } from '@/model';
import React from 'react';
import ImportNft from './page/ImportNft';

export const RouterImport: IRouter[] = [
  {
    path:'/import-nft',
    element: <ImportNft />,
  }
]
