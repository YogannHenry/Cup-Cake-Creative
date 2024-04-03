import { NavLink, useLocation } from "react-router-dom";

function Login() {
    const location = useLocation();
    console.log("loc:", location);
    console.log("state:",location.state);
    const userName = location.state?.userName || ''; // Utilisation de la syntaxe ?. pour vérifier la présence de location.state.userName

    return (
        <div className="h-screen w-full flex items-center">
            <h3>Bonjour {userName}</h3>
            <NavLink to='/' className=" border-2 p-2">
               Déconnexion
            </NavLink>
        </div>
    );
}
 
export default Login;
