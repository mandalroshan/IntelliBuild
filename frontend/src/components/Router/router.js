import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { login } from '../LoginPage/login'

export const router = () => {
  return (
      <div>
          <BrowserRouter>
            <Routes>
                  <Route path='/' Component={login}/>
          </Routes>
          </BrowserRouter>
          
    </div>
  )
}
