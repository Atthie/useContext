
function Navbar() {

    return (
       
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid d-flex mb-3">
                <div>
                    <a class="navbar-brand me-auto p-2" href="#">Cake</a>
                </div>
                
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse p-2" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item panier">
                                <img src= {process.env.PUBLIC_URL + 'panier.png'} />
                                <h4>3</h4>
                            </li>
                            <li class="nav-item">
                                <img src= {process.env.PUBLIC_URL + 'utilisateur.png'} />
                                <h4>Atthie</h4>
                            </li>
                            
                        </ul>
                    </div>
                

            </div>
        </nav>
        
    )
}
export default Navbar