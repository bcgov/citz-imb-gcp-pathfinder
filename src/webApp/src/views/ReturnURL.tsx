import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';

function ReturnURL () {
    return (
        <>
        <div>
            <Spinner />
            <h2>You have deployed you application to BCGov google cloud!</h2> 
            <br/>
            <p> Make sure you <b>save the URL</b> before exiting page</p>   
            <p>Public URL: 
                <Link to={'https://google.com'} target="_blank" rel="noopener noreferrer"  > http://yourURL.com</Link>
            </p>
        </div>
        </>
    )
}
export default ReturnURL;
