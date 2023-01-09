import { useContext, useEffect } from "react";
import "./PinnedCard.scss";
import { Context } from "../context/Context";

const PinnedCard = () => {
  const { apiValue } = useContext(Context);

  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const result = await request.json();
    console.log(result);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="wrapper">
        <div className="pinnedCard">
          <p className="pinnedCard__text">Popular Repositors</p>
          <div className="pinnedCard-container">
            <div className="pinnedCard-container-name">
              <div className="pinnedCard-container-name-container">
                <div className="pinnedCard-container-name-container-box">
                  <i className="fa fa-book"></i>
                  <h4 className="pinnedCard-container-name-container-box__title">
                    JAVASCRIPT MASALALAR
                  </h4>
                </div>
                <div className="pinnedCard-container-name-container-box">
                  <p className="pinnedCard-container-name-container-box__text">
                    Public
                  </p>
                </div>
              </div>
              <div className="pinnedCard-container-name__comments">
                Solved Examples in JavaScript Programming Language
              </div>
              <div className="pinnedCard-container-name-languages">
                <div className="pinnedCard-container-name-languages-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinnedCard;
