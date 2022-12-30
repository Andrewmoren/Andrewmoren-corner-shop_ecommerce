import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Products</h4>
            <Form>
              <FormGroup className="form__group">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Double sofa"
                  value={enterTitle}
                  onClick={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="Other..."
                  value={enterShortDesc}
                  onClick={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description..."
                  value={enterDescription}
                  onClick={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enterPrice}
                    onClick={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enterCategory}
                    onClick={(e) => setEnterCategory(e.target.value)}
                  >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input type="file" required />
                </FormGroup>
              </div>

              <button className="buy__btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
