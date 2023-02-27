import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CellPhoneCard from "../cardCellphone";
function LogCellPhoneCard() {
  return (
    <Container>
      <Row>
        <Col>
          <CellPhoneCard></CellPhoneCard>
        </Col>
      </Row>
    </Container>
  );
}

export default LogCellPhoneCard;
