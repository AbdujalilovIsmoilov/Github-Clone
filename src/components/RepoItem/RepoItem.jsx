import { useEffect, useState, useContext } from "react";
import "./RepoItem.scss";
import { Context } from "../../UI/context/Context";

const RepoItem = () => {
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
      <div className="container">
        <form className="form" action="#">
          <input
            type="text"
            className="form__input"
            placeholder="Find a repository..."
          />
        </form>
        {array.length > 0
          ? array.map((item, index) => (
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
                      <div className="repo-container-box-content-language__color"></div>
                      <p className="repo-container-box-content-language__text">
                        {item.language}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="repo-container-star">
                  <i
                    className="fa fa-star"
                  ></i>
                  <p className="repo-container-star__text">Start</p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default RepoItem;
