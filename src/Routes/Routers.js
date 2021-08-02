import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../pages/Main'
import QuestionRegister from '../pages/QuestionRegister'

import Navigation from '../components/Navigation'

const Routers = () => (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={Main} />
    <Route exact path="/QuestionRegister" component={QuestionRegister} />
  </BrowserRouter>
)

export default Routers
