import React from "react";
import { Container, Row, Col } from "reactstrap";

const AdminNav = () => {
  return (
    <header className="admin__header">
      <div className="admin__nav-top">
        <Container>
          <div className="admin__nav-wrapper-top">
            <div className="logo">
              <h2>CornerShop</h2>
            </div>

            <div className="search__box">
              <input type="text" placeholder="Search..." />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
            <div className="admin__nav-top-right">
              <span>
                <i className="ri-notification-3-line"></i>
              </span>
              <span>
                <i className="ri-settings-2-line"></i>
              </span>
              <img src="" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default AdminNav;
