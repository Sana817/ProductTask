import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../Actions/actions";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(props.product);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    dispatch(
      updateProduct({
        ...props.product,
        price: updatedProduct.price,
        color: updatedProduct.color,
        image: updatedProduct.image,
      })
    );
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "10px", padding: "10px" }}
      >
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="conatiner d-flex ">
            <h5 className="card-title">{props.product.name}</h5>
            <i
              className="fa fa-pencil-square-o edit "
              style={{ marginLeft: " 120px" }}
              aria-hidden="true"
              onClick={handleEditClick}
            ></i>
            <i
              className="fa fa-trash del"
              aria-hidden="true"
              style={{ marginLeft: "15px" }}
              onClick={() => dispatch(deleteProduct(props.product.id))}
            ></i>
          </div>
          <p className="card-text">{props.product.category}</p>
          <p className="card-text">{props.product.color}</p>
          <p className="card-text">{props.product.price}</p>
        </div>
      </div>
      {showModal && (
        <div
          className="modal"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-dialog"
            style={{ position: "relative", top: "30%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={updatedProduct.name}
                      onChange={handleInputChange}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={updatedProduct.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Color</label>
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      value={updatedProduct.color}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={updatedProduct.image}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
