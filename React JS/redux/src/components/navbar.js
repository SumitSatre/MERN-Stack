import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
    return (
        <div style={{display:'flex' , allignItems:'center' , justifyContent:'space-between'}}>
            <span className="logo"> Redux Store</span>
            <div>
                <Link className="navLink" to={"/"}>Home</Link>
                <Link className="navLink" to={"/cart"}>Cart</Link>
                <span className="cartCount">Cart Item Count : 0</span>
            </div>
        </div>
    )
}

export default Navbar;