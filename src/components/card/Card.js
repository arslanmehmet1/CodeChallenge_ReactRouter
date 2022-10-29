import React from "react";
import html from "../../assets/img/logo_html.png";
import css from "../../assets/img/logo_css.png";
import brush from "../../assets/img/logo_brush.png";
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="box" onClick={() => navigate("/html")}>
        <img src={html} alt="" />
        <h3>HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box" onClick={() => navigate("/css")}>
        <img src={css} alt="" />
        <h3>CSS3 Styling</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box" onClick={() => navigate("/logo")}>
        <img src={brush} alt="" />
        <h3>HTML5 Markup</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </div>
  );
};

export default Card;
