import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../static/css/component/orderLookup/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
const OrderLookup = () => {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://127.0.0.1:8000/khoi/oke`);
    setOrders(res.data);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="order-lookup-container">
      <h2>Order Lookup</h2>
      <Form onSubmit={handleSubmit} className="order-lookup-form">
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={handlePhoneChange}
            className="order-lookup-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="order-lookup-button">
          Lookup
        </Button>
      </Form>
      <div className="order-list-container">
        {orders.map(
          (order) =>
            order.active === false && (
              <div key={order.id} className="order-item">
                <p>Order ID: {order.id}</p>
                <p>
                  Order Status: Đang giao hàng{" "}
                  <FontAwesomeIcon icon={faTruck} />
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default OrderLookup;
