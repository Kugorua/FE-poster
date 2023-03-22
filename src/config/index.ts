
const { VITE_HTTP_BASE } = import.meta.env

const CONFIG = {
  isProduction: false,
  // 路由 basename
  baseURL: '/',
  // 网页标题
  title: 'Tomato Work',
  http: {
    baseURL: VITE_HTTP_BASE as string
  },
}

export default CONFIG
