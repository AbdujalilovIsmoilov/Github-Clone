import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import "./PinnedCard.scss";

const PinnedCard = () => {
  const { apiValue } = useContext(Context);
  const [total, setTotal] = useState(6);
  const [totalIndex, setTotalIndex] = useState(1);
  const firstOperator = total * totalIndex;
  const lastOperator = firstOperator - total;
  const [array, setArray] = useState([]);
  const pushArray = [];

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

  const sliceApi = array.slice(lastOperator, firstOperator);
  for (let i = 1; i <= Math.floor(array.length / total); i++) {
    pushArray.push(i);
  }

  const ClickedBtn = (number) => {
    setTotalIndex(number);
  };

  return (
    <>
      <div className="wrapper">
        <div className="pinnedCard">
          <p className="pinnedCard__text">Popular Repositors</p>
          <div className="pinnedCard-container">
            {array.length > 0
              ? sliceApi.map((item, index) => (
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
          <div className="pinnedCard-btnGroup">
            {pushArray.length &&
              pushArray.map((item, index) => (
                <button
                  key={index}
                  className="pinnedCard-btnGroup__btn"
                  type="button"
                  onClick={() => ClickedBtn(item)}
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PinnedCard;
