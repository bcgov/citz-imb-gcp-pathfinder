import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';

function Home() {
  const [dockerFile, setDockerFile] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [splitDockerName, setSplitDockerName] = useState("");
  //const navigate = useNavigate();

  /**
  * @description Used to save dockerfile and remove path recieved in input.
  * @param {React.ChangeEvent}     e event from HTML input element
  */
  async function saveDockerFile(e: React.ChangeEvent<HTMLInputElement>){
    setDockerFile(e.target.value)
    const splitArray = (e.target.value).split("\\");
    setSplitDockerName(splitArray[splitArray.length - 1])
  }
  

  /**
  * @description Submit form, and redirect.
  * @param {React.FormEvent}     event event from HTML Form element
  */
  async function submitForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const req = await fetch (process.env.API_URL + "/gcp/create?" + "description=" + description + "&image=" + image + "&id=" + accessCode, 
    {
      method: "POST",

    }); 
    const data = await req.json()
    console.log(data.status)
    console.log(data.uri)
    //navigate('/returnURL')
  }

  return (
    <>
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
            style={{ }} 
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
            style={{ }} 
            onChange={((e) => setImage(e.target.value))}
          />
          <br/>
          <br/>
          <br/>
          <label style={{
            backgroundColor: "#e0e0e0", 
            padding: "10px 17px", 
            borderRadius: "5px"
          }}>
            <input 
              type="file"
              value={dockerFile}
              style={{display: "none"}}
              onChange={((e) => saveDockerFile(e))}
            />
            {splitDockerName ? ("Change "):("Add ")}
             Docker File
          </label>
          <br/>
          <br/>
          {splitDockerName}
          <br/>
          <br/>
          <label >  Enter Your App Description: 
          </label>
          <br/> 
          <input 
            type="text" 
            value={description} 
            style={{ }} 
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
            style={{ }} 
            onChange={((e) => setAccessCode(e.target.value))}
          />
          <br/>
          

          <br/>
          <br/>
          <button type='submit'> 
            submit
          </button>
        </form>
        <br/>
        <p className="read-the-docs">
        Once you submit, wait 1 - 3 minutes for a http link to be returned to you
      </p>
        
      </div>
      
      </>
  )

}
export default Home
