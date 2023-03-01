import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LogCellPhoneCard from "../../component/layout/component/logCellPhoneCard";
import LogLaptopCard from "../../component/layout/component/logLaptopCard";
import HomeBody from "../../component/layout/component/homeBody";
import Footer from "../../component/layout/component/footer";
function Home() {
  return (
    <Container>
      <HomeBody></HomeBody>
      <h1>Danh sách điện thoại bán chạy</h1>
      <LogCellPhoneCard></LogCellPhoneCard>
      <h1>Laptop bán chạy</h1>
      <LogLaptopCard></LogLaptopCard>
      <h1>Phụ Kiện</h1>
      <LogCellPhoneCard></LogCellPhoneCard>

      <h2>nghĩa</h2>
      <LogCellPhoneCard></LogCellPhoneCard>
    </Container>
  );
}

export default Home;
