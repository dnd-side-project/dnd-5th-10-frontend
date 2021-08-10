import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import QuestionRegisterPage from 'pages/QuestionRegisterPage'
import QuestionSearchPage from 'pages/QuestionSearchPage'
import SetQuizOptionsPage from 'pages/SetQuizOptionsPage'
import QuizSolvingPage from 'pages/QuizSolvingPage'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'

const Routers = () => (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/login" component={MainPage} />
    <Route exact path="/QuestionRegister" component={QuestionRegisterPage} />
    <Route exact path="/QuestionSearch" component={QuestionSearchPage} />
    <Route exact path="/SetQuizOptions" component={SetQuizOptionsPage} />
    <Route exact path="/SetQuizOptions/QuizSolving" component={QuizSolvingPage} />
    <Footer />
  </BrowserRouter>
)

export default Routers
