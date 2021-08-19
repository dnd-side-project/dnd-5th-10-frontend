import { Route, Redirect } from 'react-router-dom'
import { JWT_TOKEN } from 'constants/Oauth'
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={(props) => (JWT_TOKEN && restricted ? <Redirect to="/" /> : <Component {...props} />)} />
  )
}
export default PublicRoute
