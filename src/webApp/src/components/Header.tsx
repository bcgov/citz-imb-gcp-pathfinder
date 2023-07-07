import { Link } from 'react-router-dom'
import logo from '/bcGovLogo.svg'


function Header () {
    return (
        <>
        <div style={{
            backgroundColor:"#234075", 
            position: "absolute", 
            right: "0px", 
            top: "0px", 
            left: "0px", 
            borderBottom: "solid #e3a82b", 
            minHeight: "60px"
        }}>
            <div style={{
                maxWidth: "200px", 
                marginLeft: '5%'
            }}>
                <img src={logo} />
            </div>
            <div style={{
                position: "absolute",
                right: "5%",
                top: "15px",
                color: "white", 
                fontSize: "20px",
            }}>
                <Link to={'/'} style={{color: "white"}}>Home </Link>
                 | 
                <Link to={'/info'} style={{color: "white"}}> Info</Link>
            </div>
        </div>
        </>
    )

}
export default Header
