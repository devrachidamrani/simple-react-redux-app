import { useDispatch, useSelector } from 'react-redux'
import { toggleAuth } from '../actions'

const Auth = () => {
  const isLoggedIn = useSelector(({ auth }) => {
    return auth.isAuthenticated
  })

  const dispatch = useDispatch()

  const handleAuth = () => {
    dispatch(toggleAuth())
  }

  return (
    <button className='button is-info' onClick={handleAuth}>
      {isLoggedIn ? 'Log Out' : 'Log In'}
    </button>
  )
}

export default Auth
