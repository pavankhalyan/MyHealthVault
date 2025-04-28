import { Link } from "react-router-dom";

function Landing(){
    return (
        <div>
            <h1>Decentralized Healthcare Records</h1>
            <p>Own, manage, and control your health data securely and easily.</p>
         <div>
            <Link>
               <button to="/login" >Login</button>
            </Link>
            <Link>
               <button to="/signup" >Signup</button>
            </Link>
         </div>
        </div>
    )
}

export default Landing;