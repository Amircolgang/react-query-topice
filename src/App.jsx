import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {
  const result = useQuery({
    queryKey: ["Posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      return res.json()
    }
  })

  if (result.isLoading) {
    return <h1>Loading...</h1>
  }

  if (result.error) {
    return <h1>Error: {result.error.message}</h1>
  }

  return (
    <>
      <ul>
        {result.data.map(e => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
