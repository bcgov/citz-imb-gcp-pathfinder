import React, { useState } from 'react'
import ReturnURL from './ReturnURL';
import "../components/spinner.css"

function Home() {
  const [accessCode, setAccessCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uri, setUri] = useState("");
  const [port, setPort] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const navigate = useNavigate();



  /**
  * @description Submit form, and redirect.
  * @param {React.FormEvent}     event event from HTML Form element
  */
  async function submitForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setLoading(true);
    const req = await fetch ("http://localhost:5050/" + "api/gcp/create?" + "description=" + description + "&image=" + image + "&id=" + accessCode + "&port=" + port, 
    {
      method: "POST",

    }); 
    const data = await req.json()
    setLoading(false)
    if(data.status == "200"){
      console.log("here")

      setUri(data.response.uri)

    }else{
      setLoading(false)

      setError(data.response)

    }

    
    

  }

  return (
    <>{uri?
      (
        <>
          <ReturnURL uri={uri}/>
        </>
      ):
      (
        
      <>
      
        <div>
            {loading ? (
                <div className="spinner-container">
                    <div className="loading-spinner">

                    </div>
                 </div>
            ):(
               <></>
            )}
        </div>
        <br/>
        {error? (<div style={{backgroundColor: '#FFCCCC', minHeight:'20px' }}><p>There was an error creating your intance: {error}</p> </div>):(<></>)}
      <h1>Docker Deploy</h1>
      <p className="read-the-docs">
        Insert your docker file to deploy it to google cloud
      </p>
      
      <div className="card">
        <form onSubmit={((e) =>submitForm(e))}>
        
        <label >  Enter Your Name: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={name} 
            style={{ minWidth: "250px", textAlign: 'right'}} 
            onChange={((e) => setName(e.target.value))}
          />
          <br/>
          <br/>
          <br/>

          <label >  Enter Your Container Image Link: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={image} 
            style={{  minWidth: "250px"}} 
            onChange={((e) => setImage(e.target.value))}
          />
          <br/>
          <br/>
          <br/>
          <label >  Enter The Port Specified in your Container: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={port} 
            style={{  minWidth: "250px"}} 
            onChange={((e) => setPort(e.target.value))}
          />
          <br/>

          <br/>
          <label >  Enter Your App Description: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={description} 
            style={{  minWidth: "250px"}} 
            onChange={((e) => setDescription(e.target.value))}
          />
          <br/>
          <br/>
          <br/>
          <label >  Enter Your Access Code: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={accessCode} 
            style={{  minWidth: "250px"}} 
            onChange={((e) => setAccessCode(e.target.value))}
          />
          <br/>
          

          <br/>
          <br/>
          <button type='submit'> 
            submit
          </button>
        </form>

        <p className="read-the-docs">
        Once you submit, wait 1 - 3 minutes for a http link to be returned to you
      </p>
        
      </div>
      </>)}
      
      </>
  )

}
export default Home
