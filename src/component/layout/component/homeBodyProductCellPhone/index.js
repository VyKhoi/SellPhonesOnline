import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderType from "../headerType";
import LogCellPhoneCard from "../logCellPhoneCard";
import LogLaptopCard from "../logLaptopCard";
// import LogNews from "../technologyNews";
function HomeBodyProductCellPhone() {
  return (
    <div className="container_body_content_page">
      <HeaderType></HeaderType>
      <h1>Danh sách điện thoại bán chạy</h1>
      <LogCellPhoneCard></LogCellPhoneCard>

      <h1>Danh sách điện thoại</h1>
      <LogCellPhoneCard></LogCellPhoneCard>
      <h2>Tin tức công nghệ</h2>
    </div>
  );
}

export default HomeBodyProductCellPhone;
