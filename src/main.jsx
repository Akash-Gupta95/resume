import React from 'react'
import App from './App.jsx'
import './index.css'
import StepContent from './StepContent.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter >
   < StepContent >
    <App />
    </StepContent>
    </BrowserRouter>
)
