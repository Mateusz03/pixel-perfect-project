import React from "react";
import "./news.scss";
import { Container } from "react-bootstrap";

const NewsItem = () => {};

const News = () => {
  return (
    <Container className="news-container">
      <div className="news-title">Aktualności</div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Container>
  );
};
export default News;
