import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Services from './Components/Services/Services.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>

        <Route path ='' element = {<Home/>}/>
        <Route path ='services' element = {<Services/>}/>
        <Route path ='portfolio' element = {<Portfolio/>}/>
        <Route path ='about' element = {<About/>}/>
        <Route path ='contact' element = {<Contact/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
