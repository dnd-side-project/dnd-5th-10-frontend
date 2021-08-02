import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import QuestionRegisterPage from 'pages/QuestionRegisterPage'
import Navigation from 'components/Navigation'

const Routers = () => (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/QuestionRegister" component={QuestionRegisterPage} />
  </BrowserRouter>
)

export default Routers
