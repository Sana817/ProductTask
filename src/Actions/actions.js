// actions are what should be done
export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    product: product,
  };
};
export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    id: id,
  };
};
// export const editProduct = (id) => {
//   return {
//     type: "EDIT_PRODUCT",
//     id: id,
//   };
// };

export const updateProduct = (product) => {
  console.log("update product in action " + product);
  return {
    type: "UPDATE_PRODUCT",
    product: product,
  };
};
export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    error,
  };
};
export const deleteProductSuccess = (id) => {
  return {
    type: "DELETE_PRODUCT_SUCCESS",
    id,
  };
};

export const deleteProductFailure = (error) => {
  return {
    type: "DELETE_PRODUCT_FAILURE",
    error,
  };
};
export const updateProductSuccess = (id, updatedData) => {
  return {
    type: "UPDATE_PRODUCT_SUCCESS",
    id,
    updatedData,
  };
};

export const updateProductFailure = (error) => {
  return {
    type: "UPDATE_PRODUCT_FAILURE",
    error,
  };
};
