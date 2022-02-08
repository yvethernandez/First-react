import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'


import { Blog, ArrowBlogFunction }  from './pages/Blog'

ReactDOM.render(
  <React.StrictMode>
   {/* <App />*/}
   <Blog/>
   <ArrowBlogFunction/>
  </React.StrictMode>,
  document.getElementById('root')
)
