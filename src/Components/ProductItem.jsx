import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../Actions/actions";
import { useForm, Controller } from "react-hook-form";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const handleEditClick = () => {
    setShowModal(true);
    const product = props.product;
    setValue("price", product.price);
    setValue("color", product.color);
    setValue("image", product.image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmit = (data) => {
    dispatch(
      updateProduct({
        ...props.product,
        price: data.price,
        color: data.color,
        image: data.image,
      })
    );
    setShowModal(false);
  };

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "10px", padding: "10px" }}
      >
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="container d-flex">
            <h5 className="card-title">{props.product.name}</h5>
            <i
              className="fa fa-pencil-square-o edit"
              style={{ marginLeft: "120px" }}
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
        <div className="modal" style={{ display: "block" }}>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={props.product.name}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <Controller
                      name="price"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          type="number"
                          className="form-control"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Color</label>
                    <Controller
                      name="color"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Color is required" }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="form-control"
                          {...field}
                        />
                      )}
                    />
                    {errors.color && (
                      <span className="text-danger">
                        {errors.color.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <Controller
                      name="image"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Image URL is required" }}
                      render={({ field }) => (
                        <input
                          type="text"
                          className="form-control"
                          {...field}
                        />
                      )}
                    />
                    {errors.image && (
                      <span className="text-danger">
                        {errors.image.message}
                      </span>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
