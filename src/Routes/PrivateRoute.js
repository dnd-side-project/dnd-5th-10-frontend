import { Route, Redirect } from 'react-router-dom'
import { JWT_TOKEN } from 'constants/Oauth'
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route {...rest} render={(props) => (JWT_TOKEN ? <Component {...props} /> : <Redirect to="/" />)} />
  )
}
export default PrivateRoute
