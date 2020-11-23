// Importing required files and packages here.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Defining functional component here.
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Ecommerce</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
