import { useState } from "react"
function Home() {
    const [count, setCount] = useState(0)

  return (
    <>
      <h1>Docker Deploy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br/>

        
      </div>
      <p className="read-the-docs">
        Insert your docker file to deploy it
      </p>
      </>
  )

}
export default Home
