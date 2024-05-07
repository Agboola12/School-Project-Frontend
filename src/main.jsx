import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing'
import store from './store'
import { Provider } from 'react-redux'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
        <Routing />
    </Provider>
  </React.StrictMode>
)
