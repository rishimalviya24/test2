import React from 'react'

import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'



import App from './App.jsx'



function MyApp(){
  return (
    <>
    <h2>custom react</h2></>
  )
}

const anotherUser = "chai aur react"

const anotherElement = (
  <a href="https://google.com" target='_blank' >Visit google</a>
)

const reactElement = React.createElement('a', {
  href:'https://google.com',target:'_blank'
},
'click me to visit google',
anotherUser
)

createRoot(document.getElementById('root')).render(
   reactElement
)
