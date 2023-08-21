import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProductsRequest } from "../Actions/actions";

function Products() {
  const myState = useSelector((state) => state.productReducer); // to get the state from store use useSelector
  console.log("myState: " + myState);
  const dispatch = useDispatch(); // to trigger actions

  const [product, setProduct] = useState({
    name: "",
    price: "",
    color: "",
    imageUrl: "",
    category: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("on adding product from front end: " + product);
    if (product !== "") {
      dispatch(addProduct(product));
    }

    setProduct({
      name: "",
      price: "",
      color: "",
      imageUrl: "",
      category: "",
    });
  };
  return (
    <>
      <div className="container">
        <div
          className="container  border"
          style={{
            width: "50%",
            height: "70%",
            marginTop: "10px",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        >
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={product.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={product.price}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Color</label>
              <input
                type="text"
                className="form-control"
                name="color"
                value={product.color}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={product.image}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={product.category}
                onChange={onChange}
                required
              />
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
              <ProductItem key={product.id} product={product}></ProductItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
