
function Navbar() {

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
                           
                            <li class="nav-item">
                                <a href="/">Acceuil</a>
                            </li>
                            <li class="nav-item">
                                <a href="/Connexion">Connexion</a>
                            </li>
                            <li class="nav-item user">
                                <img src= {process.env.PUBLIC_URL + 'utilisateur.png'} />
                                <p>Atthie</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                    
                

            </div>
        </nav>
        
    )
}
export default Navbar