import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from 'pages/MainPage'
import QuestionRegisterPage from 'pages/QuestionRegisterPage'
import QuestionSearchPage from 'pages/QuestionSearchPage'
import SetQuizOptionsPage from 'pages/SetQuizOptionsPage'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import MyRegisterQuestion from 'components/MyRegisterQuestion'
import MyRegisterAnswer from 'components/MyRegisterAnswer'
import MyLikeAnswer from 'components/MyLikeAnswer'
import MyBookmarkQuestion from 'components/MyBookmarkQuestion'
import MyPageNavigation from 'components/MyPageNavigation'

const Routers = () => (
  <BrowserRouter>
    <Navigation />
    <Route exact path="/" component={MainPage} />
    <Route exact path="/login" component={MainPage} />
    <Route path="/MyPage" component={MyPageNavigation} />
    <Route exact path="/MyPage/MyRegisterQuestion" component={MyRegisterQuestion} />
    <Route exact path="/MyPage/MyRegisterAnswer" component={MyRegisterAnswer} />
    <Route exact path="/MyPage/MyLikeAnswer" component={MyLikeAnswer} />
    <Route exact path="/MyPage/MyBookmarkQuestion" component={MyBookmarkQuestion} />
    <Route exact path="/QuestionRegister" component={QuestionRegisterPage} />
    <Route exact path="/QuestionSearch" component={QuestionSearchPage} />
    <Route exact path="/SetQuizOptions" component={SetQuizOptionsPage} />
    <Footer />
  </BrowserRouter>
)

export default Routers
