import { useEffect, useState, useContext } from "react";
import { Context } from "../../UI/context/Context";
import "./RepoItem.scss";

const RepoItem = () => {
  const { apiValue } = useContext(Context);
  const [state, setState] = useState("");
  const [array, setArray] = useState([]);
  const [filteredFunction, setFilteredFunction] = useState([]);
  const [total, setTotal] = useState(4);
  const [totalIndex, setTotalIndex] = useState(1);
  const firstOperator = total * totalIndex;
  const lastOperator = firstOperator - total;

  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const result = await request.json();
    setFilteredFunction(result);
    setArray(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  const keyChangeUp = (e) => {
    const keyValue = e.target.value;
    setState(keyValue);

    if (keyValue.trim().length > 0) {
      const filtered = array.filter((item) =>
        item.name.toLowerCase().includes(keyValue.trim())
      );
      setArray(filtered);
    } else {
      setArray(filteredFunction);
    }
  };

  const sliceApi = array.slice(lastOperator, firstOperator);

  const pushArray = [];
  for (let i = 1; i <= Math.floor(array.length / total); i++) {
    pushArray.push(i);
  }

  const ClickedBtn = (index) => {
    setTotalIndex(index);
  };

  return (
    <>
      <div className="container">
        <form className="form" action="#">
          <input
            type="text"
            className="form__input"
            placeholder="Find a repository..."
            value={state}
            onChange={(e) => keyChangeUp(e)}
          />
        </form>
        {array.length > 0
          ? sliceApi.map((item, index) => (
              <div className="repo-container" key={index}>
                <div className="repo-container-box">
                  <div className="repo-container-box-titles">
                    <a
                      href={item.html_url}
                      target="_blank"
                      className="repo-container-box-titles__name"
                    >
                      {item.name}
                    </a>
                    <p className="repo-container-box-titles__public">Public</p>
                  </div>
                  <p className="repo-container-box__description">
                    {item.description}
                  </p>
                  <div className="repo-container-box-content">
                    <div className="repo-container-box-content-language">
                      <p className="repo-container-box-content-language__text">
                        {item.language}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="repo-container-star">
                  <i className="fa fa-star"></i>
                  <p className="repo-container-star__text">Start</p>
                </div>
              </div>
            ))
          : ""}
        <div className="btn-group">
          {pushArray.length > 0 &&
            pushArray.map((item, index) => (
              <button
                type="button"
                className="btn-group__btn"
                key={index}
                onClick={() => ClickedBtn(item)}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default RepoItem;
