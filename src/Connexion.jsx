import Navbar from "./Navbar"
import { useContext, useRef, useState } from "react";
import { UserContext} from "./Usercontext";

function Connexion(){
    let loginRef = useRef('')
   const [use, setUse]=useState('')
    function login ( event ){
            event.preventDefault()
            let value = loginRef.current.value;
            setUse(value)
            value = ''
          

    }
    return (
        <div>
            <UserContext.Provider value={use}>
            <Navbar></Navbar>
            <div className="form">
                <form onSubmit={login}>
                    <h3>Connexion</h3>
                    <div className="form-group">
                        <input type="text"  ref={loginRef} className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </UserContext.Provider>
            
            

        </div>
        
    )
}

export default Connexion