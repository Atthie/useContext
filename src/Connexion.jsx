import Navbar from "./Navbar"
import { useRef, useContext, useState } from "react";

function Connexion(){
    const loginRef = useRef('')
    const [logins, setLogin] = useState([])

    function login ( event ){
        event.preventDefault()
            console.log(logins)
            const value = loginRef.current.value;
            if (logins.includes(value)) 
            {
                console.log('deja')
            } else {
                setLogin([...logins, value]);
                console.log('nouveau')
            }
            
     }
    return (
        <div>
            <Navbar></Navbar>
            <div className="form">
                <form onSubmit={login}>
                    <h3>Connexion</h3>
                    <div className="form-group">
                        <input type="email"  ref={loginRef} className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            

        </div>
        
    )
}

export default Connexion