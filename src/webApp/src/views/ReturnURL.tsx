
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';

export interface Props {
    uri: string;
  }

function ReturnURL (props: Props) {
    return (
        <>
        <div>
            <Spinner />
            <h2>You have deployed you application to BCGov Google Cloud!</h2> 
            <br/>
            <p> Make sure you <b>save the URL</b> before exiting page</p>   
            <p>Public URL: 
                <Link to={props.uri} target="_blank" rel="noopener noreferrer"  > {props.uri }</Link>
            </p>
            <br/>
            <p className="read-the-docs">
       If you get a "Forbidden" message when clicking the link, email your administrator and wait for them to grant it public access
      </p>
        </div>
        </>
    )
}
export default ReturnURL;
