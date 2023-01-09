import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import "./Followers.scss";

const Followers = () => {
  const { apiValue } = useContext(Context);
  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/${apiValue}/followers`
    );
    const result = await request.json();
    console.log(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <div className="container">
        <div className="followers-container">
          <div className="followers-container-box">
            <img
              src="https://picsum.photos/50/50"
              alt="user"
              title="user"
              className="followers-container-box__img"
            />
            <div className="followers-container-box-content">
              <div className="followers-container-box-content-titles">
                <h5 className="followers-container-box-content-titles__name">
                  Abdujalilov Ismoil
                </h5>
                <p className="followers-container-box-content-titles__login">
                  AbdujalilovIsmoilov
                </p>
              </div>
              <p className="followers-container-box-content__comment">
                Shohsulton Ummatov Shuhratovich 16 yers old Web Developer of
                Uzbekistan
              </p>
            </div>
          </div>
          <button
            type="button"
            className="followers-container-box__btn"
          >
            Follow
          </button>
        </div>
      </div>
    </>
  );
};

export default Followers;
