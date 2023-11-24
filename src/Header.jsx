import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsJustify,
} from "react-icons/bs";
function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menuIcon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
