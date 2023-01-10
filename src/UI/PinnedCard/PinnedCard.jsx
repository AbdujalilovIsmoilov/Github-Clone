import { useContext, useEffect, useState } from "react";
import "./PinnedCard.scss";
import { Context } from "../context/Context";

const PinnedCard = () => {
  const { apiValue } = useContext(Context);
  const [array, setArray] = useState([]);

  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const result = await request.json();
    setArray(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <div className="wrapper">
        <div className="pinnedCard">
          <p className="pinnedCard__text">Popular Repositors</p>
          <div className="pinnedCard-container">
            {array.length > 0
              ? array.map((item, index) => (
                  <div className="pinnedCard-container-name" key={index}>
                    <div className="pinnedCard-container-name-container">
                      <div className="pinnedCard-container-name-container-box">
                        <i className="fa fa-book"></i>
                        <a
                          target="_blank"
                          href={item.html_url}
                          className="pinnedCard-container-name-container-box__title"
                        >
                          {item.name}
                        </a>
                      </div>
                      <div className="pinnedCard-container-name-container-box">
                        <p className="pinnedCard-container-name-container-box__text">
                          Public
                        </p>
                      </div>
                    </div>
                    <div className="pinnedCard-container-name__comments">
                      {item.description}
                    </div>
                    <div className="pinnedCard-container-name-languages">
                      <div className="pinnedCard-container-name-languages-box"></div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default PinnedCard;
