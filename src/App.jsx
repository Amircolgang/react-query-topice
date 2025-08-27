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

  if (result.isPending){
    return <h1>Loding</h1>
  }
  return (
    <>
      <ul>
        {
          result.data.mape(e => <li key={e.id}>{e.name}</li> )
        }
      </ul>
    </>
  )
}

export default App
