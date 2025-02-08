import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext) 

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password} )

    }
  return (
    <>

    <div>login</div>
    <input type="text" placeholder='username' 
    value={username}
    onChange = {(e) => setUsername(e.target.value)} />
    {"  "}
    <input type="text"  placeholder='password'
    value={password}
    
    Onchange={(e) => setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default login