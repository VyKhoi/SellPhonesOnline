import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LogCellPhoneCard from "../../component/layout/component/logCellPhoneCard";
function Home() {
  return (
    <Container>
      <LogCellPhoneCard></LogCellPhoneCard>
    </Container>
  );
}

export default Home;
