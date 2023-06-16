import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';




import { Header } from './component/header.jsx';
import Home from './component/home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
 <Home/>
  </React.StrictMode>,
)
