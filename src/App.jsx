import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  const result = useQuery({
    queryKey : ["Posts"] ,
    queryFn : async function () {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1") 
      return data.json()
    }
  })

  console.log(result)


  return (
    <>
    
    </>
  )
}

export default App
