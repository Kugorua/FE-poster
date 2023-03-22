import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient,QueryClientProvider  } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
import RouterMain from './routers'
import { store } from './stores'

const queryClient = new QueryClient(
  {defaultOptions:{
    queries:{
      retry:false,
      refetchOnWindowFocus:false
    }
  }}
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Fragment>
      {/* <Provider store={store}> */}
      <QueryClientProvider client={queryClient}>
          <RouterMain />
          <ReactQueryDevtools initialIsOpen = {false} />
      </QueryClientProvider>
        
      {/* </Provider> */}
    </React.Fragment>
  </React.StrictMode>
)
