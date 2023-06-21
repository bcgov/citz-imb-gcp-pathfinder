import logo from '/bcGovLogo.svg'

function Header () {
    return (
        <>
        <div style={{backgroundColor:"#234075", position: "absolute", right: "0px", top: "0px", left: "0px", borderBottom: "solid #e3a82b"}}>
            <div style={{maxWidth: "200px"}}>
            <img src={logo} />
            </div>
        </div>
        </>
    )

}
export default Header