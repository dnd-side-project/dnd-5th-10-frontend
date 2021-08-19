import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import AnswerRegisterPage from 'pages/AnswerRegisterPage'
import QuestionDetailPage from 'pages/QuestionDetailPage'
import PublicRoute from 'Routes/PublicRoute'
import PrivateRoute from 'Routes/PrivateRoute'

const Routers = () => (
  <BrowserRouter>
    <PublicRoute exact path="/" component={MainPage} />
    <PrivateRoute exact path="/login" component={MainPage} />
    <PrivateRoute path="/MyPage" component={Navigation} />
    <PrivateRoute path="/MyPage" component={MyPageNavigation} />
    <PrivateRoute exact path="/MyPage/MyRegisterQuestion" component={MyRegisterQuestion} />
    <PrivateRoute exact path="/MyPage/MyRegisterAnswer" component={MyRegisterAnswer} />
    <PrivateRoute exact path="/MyPage/MyLikeAnswer" component={MyLikeAnswer} />
    <PrivateRoute exact path="/MyPage/MyBookmarkQuestion" component={MyBookmarkQuestion} />
    <PrivateRoute exact path="/QuestionRegister" component={QuestionRegisterPage} />
    <PrivateRoute exact path="/QuestionSearch" component={QuestionSearchPage} />
    <PrivateRoute path="/QuestionDetail" component={QuestionDetailPage} />
    <PrivateRoute exact path="/SetQuizOptions" component={SetQuizOptionsPage} />
    <PrivateRoute exact path="/AnswerRegister" component={AnswerRegisterPage} />
    <PrivateRoute path="/MyPage" component={Footer} />
  </BrowserRouter>
)

export default Routers
