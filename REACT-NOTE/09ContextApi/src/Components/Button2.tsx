import { useContext } from 'react'
import UserContextProvider from '../Context/ContextUser'

function Button2() {
    const {setUserCount, countUser} = useContext(UserContextProvider)
  return (
    <button onClick={() => setUserCount(countUser+1) }>Click Me</button>
  )
}

export default Button2
