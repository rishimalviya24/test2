import React,{useEffect,useState} from 'react'
// import { useLoaderData } from 'react-router-dom'


function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        }),
    })
}


export default Github