import { ReactNode } from "react";

/**
 * @description interface config router page
 */
export interface IRouter {
  path: string,
  element: ReactNode,
  children?: {
    path: string,
    element: ReactNode,
  }[]
}

// ================ Param =====================

/**
 * @description callback Asynchronous
 */
export interface IDataCallback<T> {
  callback: () => void;
  error: () => void;
  data: T;
}

// ================ RESPONSE ==================
export interface ListResponse<T>{
  message?: any,
  list: T,
  total_pages?:number

  [key:string]:any
}

