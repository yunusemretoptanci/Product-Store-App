import { Link } from "react-router-dom";
import "./Header.css";
const Header=()=>{

    return(
        <div className="header_container">
        <div className="header">
            <Link to={"/"}>
        <p>UPayments Store</p>
        </Link>
        <p>Register</p>
        </div>
        </div>
    )
}

export default Header;