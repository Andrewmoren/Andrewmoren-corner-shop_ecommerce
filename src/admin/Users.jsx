import React from "react";
import { Container, Row, Col } from "reactstrap";

const Users = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>USername</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
