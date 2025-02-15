import { useState,React } from 'react'


function App() {
  let [username,setUsername] = useState("")
  let [email,setEmail] = useState("")
  let [image,setImage] = useState("")

  function submitHandler(){
    e.preventDefault();
    console.log(e.target.username);

    const copyUser = [...allUsers];
    copyUser.push({username, email, image});
    setAllUsers(copyUser);
    setUsername('')
  
  }

  return (
    <>
    <div>
      <input type="text" className='' value={username} placeholder='Enter username'/>
      <input type="text" className='' value={email} placeholder='Enter Email '/>
      <input type="text" className='' value={image} placeholder='Enter image-url'/>
      <submit type="submit" onSubmit={submitHandler}/>
    
      
    </div>
    </>
  )
}

export default App
