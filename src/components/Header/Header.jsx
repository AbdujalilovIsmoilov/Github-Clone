import { useContext, useState } from "react";
import { Context } from "../../UI/context/Context";
import Navbar from "../../UI/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { setNavbar, setApiValue, object, navbar } = useContext(Context);
  const [value, setValue] = useState(
    localStorage.getItem("key") || "AbdujalilovIsmoilov"
  );

  const ClickedNavbar = () => {
    setNavbar((navbar) => !navbar);
  };

  const objectValues = {
    value: value.trim().length == 0,
  };

  const ClickedSubmit = async (e) => {
    e.preventDefault();
    setValue("");
    if (!objectValues.value) return setApiValue(value);
  };

  return (
    <>
      <Navbar />
      <header className="header">
        <div className="container-header">
          <nav className="nav">
            <i className="fa fa-bars" onClick={(e) => ClickedNavbar(e)}></i>
            <div className="nav-box">
              <NavLink to="/">
                <i className="fab fa-github"></i>
              </NavLink>
              <form
                className="nav-box-form"
                action="#"
                onSubmit={(e) => ClickedSubmit(e)}
              >
                <input
                  type="text"
                  className="nav-box-form__input"
                  placeholder="Search or jump to..."
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    localStorage.setItem("key", e.target.value);
                  }}
                />
                <button type="submit" className="nav-box-form-span">
                  /
                </button>
              </form>
              <ul className="nav-box-list">
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Pull request
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Issues
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Codespaces
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Marketplace
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-box">
              <i className="fa-regular fa-bell"></i>
              <div className="nav-box-drop">
                <i className="fa-solid fa-plus"></i>
                <i className="fa-sharp fa-solid fa-caret-down"></i>
              </div>
              <div className="nav-box-contact">
                <img
                  src={object.avatar_url}
                  alt="user"
                  title="user"
                  className="nav-box-contact__img"
                />
                <i className="fa-sharp fa-solid fa-caret-down"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
