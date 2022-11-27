import { Navigate, useLocation } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('@acc_token')
  const location = useLocation()
  const auth = useSelector(state => state.auth, shallowEqual)

  if ((auth.logout?.isFulfilled && !token) || !token) {
    return <Navigate to='/auth/signin' state={{ from: location }} replace />
  }

  return children
}
