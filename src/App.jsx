import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  useQuery({
    queryKey : ["Posts"] ,
    queryFn : async function () {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1") 
      return data.json()
    }
  })


  return (
    <>
    
    </>
  )
}

export default App
