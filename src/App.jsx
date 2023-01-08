import { useState } from "react";
import Header from "./components/Header/Header";
import { Context } from "./UI/context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home/Home";
import Rooms from "./components/Rooms/Rooms";
import Aside from "./components/Aside/Aside";
import Repo from "./pages/Repo/Repo";

const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [object, setObject] = useState({});
  const [apiValue, setApiValue] = useState(
    localStorage.getItem("key") || "AbdujalilovIsmoilov"
  );

  document.body.style.overflow = navbar ? "hidden" : "visible";
  console.log(object);
  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{
            navbar: navbar,
            setNavbar: setNavbar,
            apiValue: apiValue,
            setApiValue: setApiValue,
            object: object,
            setObject: setObject,
          }}
        >
          <Header />
          <Rooms />

          <main className="main container">
            <Aside />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repos" element={<Repo />} />
            </Routes>
          </main>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
