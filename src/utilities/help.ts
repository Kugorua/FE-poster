import { NavigateFunction } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

/**
 * @description set cookie
 * @param name string
 * @param value string
 */
export const setCookie = (name:string, value:string) => {
  cookies.set(name, value || '', {
    httpOnly: false,
    sameSite: 'lax'
  });
}

/**
 * @description set cookie
 * @param name string
 * @param value string
 */
 export const getCookie = (name:string) => {
  return cookies.get(name)
}

/**
 * @description clear cookie
 * @param name string
 */
export const clearCookie = (name: string) => {
  cookies.remove(name,{
    httpOnly: false,
    sameSite: 'lax'
  })
}

/**
 * @description logout when there is error 401 
 */
export const logout = (Navigate?:NavigateFunction) => {
  setTimeout(() => {
    clearCookie('userToken');
    clearCookie('userData');
    
    if(!!Navigate) {
      Navigate('/login')
    }else{
      location.reload();
    }
  });
}

