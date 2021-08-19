import { getCookie } from 'components/Cookies.js'

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorization/google?redirect_uri=' + OAUTH2_REDIRECT_URI
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorization/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorization/github?redirect_uri=' + OAUTH2_REDIRECT_URI

export const JWT_TOKEN = getCookie('Authorization')
