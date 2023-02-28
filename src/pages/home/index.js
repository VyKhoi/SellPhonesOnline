import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LogCellPhoneCard from "../../component/layout/component/logCellPhoneCard";
function Home() {
  return (
    <Container>
      <h1>Danh sách điện thoại bán chạy</h1>
      <LogCellPhoneCard></LogCellPhoneCard>
    </Container>
  );
}

export default Home;
