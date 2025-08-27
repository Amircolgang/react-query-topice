import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  useQuery({
    queryKey : ["Posts"] ,
    queryFn : async function () {
      const data = await fetch()
    }
  })


  return (
    <>
    
    </>
  )
}

export default App
