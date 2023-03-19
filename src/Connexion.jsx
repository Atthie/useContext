import Navbar from "./Navbar"
function Connexion(){
    return (
        <div>
            <Navbar></Navbar>
            <div className="form">
                <form>
                    <h3>Connexion</h3>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            

        </div>
        
    )
}

export default Connexion