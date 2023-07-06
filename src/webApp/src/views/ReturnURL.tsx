import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';

function ReturnURL () {
    return (
        <>
        <div>
            <Spinner />
            <h2>You have deployed you application to BCGov google cloud!</h2> 
            <p> Make sure you save the URL before changing applications</p>   
            <p>Public URL: 
                <Link to={'https://google.com'} >http://google.com</Link>
            </p>
        </div>
        </>
    )
}
export default ReturnURL;
