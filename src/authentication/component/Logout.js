import { useEffect } from "react"
import { useNavigate } from "react-router";

function Logout() {
    
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('role');
        alert("Logged out successfully")
        navigate('/')
    })
    return (
        //alert('Logged out Successfully')
        <div></div>
    )
}
export default Logout;