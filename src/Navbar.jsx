import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "./Usercontext"
function Navbar() {
const login = useContext(UserContext);
    return (
       
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid d-flex mb-3">
                <div className="logo">
                    <a class="navbar-brand me-auto p-2" href="#">MonMidi</a>
                </div>
                <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse p-2" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item table">
                                <img src= {process.env.PUBLIC_URL + 'table.png'} />
                                <p>3</p>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/">Acceuil</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/Connexion">Connexion</NavLink>
                            </li>
                            <li class="nav-item user">
                                <img src= {process.env.PUBLIC_URL + 'utilisateur.png'} />
                                <p> {login} </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}
export default Navbar