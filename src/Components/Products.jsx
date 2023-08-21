import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProductsRequest } from "../Actions/actions";
import { useForm } from "react-hook-form";
import ProductItem from "./ProductItem";

function Products() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myState = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(addProduct(data));
  };

  return (
    <div className="container">
      <div
        className="container border"
        style={{
          width: "50%",
          height: "70%",
          marginTop: "10px",
          marginBottom: "10px",
          paddingBottom: "10px",
        }}
      >
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">Product name is required</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-danger">Price is required</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Color</label>
            <input
              type="text"
              className="form-control"
              name="color"
              {...register("color", { required: true })}
            />
            {errors.color && (
              <span className="text-danger">Color is required</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-danger">Image URL is required</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <span className="text-danger">Category is required</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>

      <hr />
      <div className="container d-flex">
        <ul style={{ display: "flex", margin: "10px", padding: "10px" }}>
          {myState.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
