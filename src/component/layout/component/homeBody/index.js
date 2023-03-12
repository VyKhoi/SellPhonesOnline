import React, { Fragment, useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderType from "../headerType";
import LogCellPhoneCard from "../logCellPhoneCard";
import LogLaptopCard from "../logLaptopCard";
import LogNews from "../technologyNews";
import { BranchContext } from "../../../branchSelect/BranchContext";
import Test from "../../phongthinghiem";
function HomeBody() {
  //{ defaultBrach }
  // cái defaultBrach là cửa hàng, mai mốt gọi tùy theo cửa hàng mà render
  const { branchID, setBranchID } = useContext(BranchContext);
  const [listLaptop, setListLaptop] = useState([]);
  const [listPhones, setListPhones] = useState([]);

  // thay "brand" bằng giá trị mặc định của defaultBrach

  useEffect(() => {
    fetch(`http://localhost:3001/Laptop?Brach=${branchID}`)
      .then((response) => response.json())
      .then((data) => {
        setListLaptop(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [branchID]);

  useEffect(() => {
    // `http://localhost:3001/Smartphone?Brach=${defaultBrach}`
    fetch(`http://localhost:8000/home/branch/${branchID}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("no co chay vo ham lay dât", data);
        setListPhones(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [branchID]);

  return (
    <div className="container_body_content_page">
      <HeaderType></HeaderType>
      <h1>Danh sách điện thoại bán chạy</h1>
      {listPhones && (
        <LogCellPhoneCard listPhones={listPhones}></LogCellPhoneCard>
      )}
      <h1>Laptop bán chạy</h1>
      {listLaptop && <LogLaptopCard listLaptop={listLaptop}></LogLaptopCard>}
      <h1>Phụ Kiện</h1>
      <LogCellPhoneCard></LogCellPhoneCard>
      <h2>Tin tức công nghệ</h2>
      <LogNews></LogNews>
      {/* <Test listPhones={listPhones}></Test> */}
    </div>
  );
}

export default HomeBody;
