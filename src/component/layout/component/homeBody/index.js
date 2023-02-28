import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderType from "../headerType";
import LogCellPhoneCard from "../logCellPhoneCard";
function HomeBody() {
  return (
    <Container>
      <HeaderType></HeaderType>
      <h1>Danh sách điện thoại bán chạy</h1>
      <LogCellPhoneCard></LogCellPhoneCard>
    </Container>
  );
}

export default HomeBody;
