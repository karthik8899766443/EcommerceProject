import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";

export default function Header({cardItems=[]}) {
   const navigate=useNavigate();
    const HandleLogin=()=>{
      navigate('/login')
    }
    return <nav className="navbar row">
    <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-start justify-content-center">
        <div className="navbar-brand">
            <Link to={'/'}><img width="150px" src="/images/logo.png" alt="Logo" /></Link>
        </div>
    </div>

    <div className="col-12 col-md-6 mt-2 mt-md-0">
      <Search></Search>
    </div>

    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center d-flex align-items-center justify-content-md-end justify-content-center">
        <Link to={'/login'}><button type="button" onClick={HandleLogin}  className="btn btn-warning text-light"> Login</button></Link>

        <Link to={"/cart"}>
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">{cardItems.length}</span>
        </Link>
      
    </div>
</nav>    
}