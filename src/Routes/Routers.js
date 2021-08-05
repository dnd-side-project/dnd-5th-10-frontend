import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import QuestionRegisterPage from 'pages/QuestionRegisterPage'
import QuestionListPage from 'pages/QuestionListPage'

import Navigation from 'components/Navigation'

const Routers = () => (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/login" component={MainPage} />
    <Route exact path="/QuestionRegister" component={QuestionRegisterPage} />
    <Route exact path="/QuestionList" component={QuestionListPage} />
  </BrowserRouter>
)

export default Routers
