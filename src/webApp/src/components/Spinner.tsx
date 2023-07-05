import  {useState, useEffect} from "react"
import "./spinner.css"

export default function Spinner() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
    

    return (
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
        </>
    )
}