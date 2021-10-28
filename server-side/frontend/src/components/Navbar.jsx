import { Link, useHistory } from "react-router-dom"
import { BASE_URL } from "../api"
import { getData, isLoggedIn, isNotLoggedIn } from "../utils"

export default function Navbar() {
    const history = useHistory();
    async function handleLogout() {
        try {
            const res = await fetch(`${BASE_URL}/auth/logout?token=${getData().token}`, {
                method: 'POST'
            });
            const data = await res.json();
            localStorage.removeItem('data');
            localStorage.removeItem('loggedIn');
            alert(data.message);
            return window.location.reload();
        } catch (error) {
            alert("Something went wrong");
        }
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Vaccination Platform</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        {isLoggedIn() && (
                            <>
                                <li className="nav-item">
                                    <a href="" className="nav-link" >{getData()?.name}</a>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="nav-link btn btn-sm btn-primary">Logout</button>
                                </li>
                            </>
                        )}
                        {isNotLoggedIn() && (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}