import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const Users = () => {
  const { data: userData, loading } = useGetData("users");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
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

              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">Loading...</h5>
                ) : (
                  userData?.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <img src={user.photoURL} alt="photo"></img>
                      </td>
                      <td>{user.displayNAme}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Users;
