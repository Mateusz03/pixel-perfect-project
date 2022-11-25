import React from "react";
import "./news.scss";
import { Container, NavLink } from "react-bootstrap";
import pic1 from "../../images/news/pic1.png";
import pic2 from "../../images/news/pic2.png";
import pic3 from "../../images/news/pic3.png";

const NewsItem = (props) => {
  return (
    <Container className="item-container">
      <img src={props.src} alt={props.src} />
      <div className="news-date">{props.date}</div>
      <div className="news-text">
        {props.text &&
          props.text.split("/n").map((text, key) => {
            return (
              <p className="text-pools" key={key}>
                {text} <br />
              </p>
            );
          })}
      </div>
      <NavLink className="item-link">Więcej</NavLink>
    </Container>
  );
};

const News = () => {
  return (
    <Container className="news-container">
      <div className="news-title">Aktualności</div>
      <div className="news-items">
        <NewsItem
          src={pic1}
          date={"01.01.2021"}
          text={"Lorem ipsum dolor sit amet,/nconsectetur adipiscing elit."}
        />
        <NewsItem
          src={pic2}
          date={"01.01.2021"}
          text={"Lorem ipsum dolor sit amet,/nconsectetur adipiscing elit."}
        />
        <NewsItem
          src={pic3}
          date={"01.01.2021"}
          text={"Lorem ipsum dolor sit amet,/nconsectetur adipiscing elit."}
        />
      </div>
    </Container>
  );
};
export default News;
