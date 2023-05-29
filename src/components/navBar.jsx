import { NavBarContainer } from "./navBar.style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <img
        className="logo"
        src="https://d2kchovjbwl1tk.cloudfront.net/vendors/19/assets/image/1670653014087-Logo_Gonegani_resized1024-png.webp"
      ></img>
      <div className="nav">
        <Link to={"/"}>
          <div>All Product</div>
        </Link>
        <Link to={"/cart"}>
          <div>Cart</div>
        </Link>
        <Link to={"/admin"}>
          <div>Admin Page</div>
        </Link>
      </div>
      <div className="login" onClick={() => alert("구현중입니다")}>
        로그인
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
