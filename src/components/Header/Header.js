import React from "react";
import './Header.css'
import HeaderButton from "./HeaderButton";

const Header= ()=>{
return(
    <div className="row bg-dark text-white header-section py-2">
        <div className="col-4 ">
            <h1>Shop Cart</h1>
        </div>
        <div className="col-4 offset-4">
            <HeaderButton/>
        </div>
    </div>
)
}
export default Header;