import React from 'react'
import ReactDOM from 'react-dom/client'

import Routing from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
  </React.StrictMode>,
)
