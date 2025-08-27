import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  useQuery({
    queryKey : ["Posts"] ,
    queryFn 
  })


  return (
    <>
    
    </>
  )
}

export default App
