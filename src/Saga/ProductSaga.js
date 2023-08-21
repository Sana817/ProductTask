import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

// Saga worker function to fetch products
function* fetchProductsRequest() {
  try {
    const response = yield call(axios.get, "http://localhost:3000/products"); // Replace with your API endpoint
    console.log("response while fetching products: " + response.data);
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", products: response.data });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_FAILURE", error: error.message });
  }
}

// Saga worker function to add a product
function* addProduct(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:3000/products",
      action.product
    ); // Replace with your API endpoint
    console.log("response from api  while adding product: " + action.product);
    yield put({ type: "ADD_PRODUCT_SUCCESS", product: response.data });
  } catch (error) {
    yield put({ type: "ADD_PRODUCT_FAILURE", error: error.message });
  }
}

// Saga worker function to delete a product
function* deleteProduct(action) {
  try {
    console.log("delete a product with id : " + action.id);
    yield call(axios.delete, `http://localhost:3000/products/${action.id}`); // Replace with your API endpoint
    yield put({ type: "DELETE_PRODUCT_SUCCESS", id: action.id });
  } catch (error) {
    yield put({ type: "DELETE_PRODUCT_FAILURE", error: error.message });
  }
}

// Saga worker function to update a product
function* updateProduct(action) {
  try {
    console.log("saga update product" + action.product.id);
    const response = yield call(
      axios.put,
      `http://localhost:3000/products/${action.product.id}`,
      action.product
    ); // Replace with your API endpoint
    yield put({ type: "UPDATE_PRODUCT_SUCCESS", product: response.data });
  } catch (error) {
    yield put({ type: "UPDATE_PRODUCT_FAILURE", error: error.message });
  }
}

// Saga watcher function to listen for actions
function* watchActions() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProductsRequest);
  yield takeEvery("ADD_PRODUCT", addProduct);
  yield takeEvery("DELETE_PRODUCT", deleteProduct);
  yield takeEvery("UPDATE_PRODUCT", updateProduct);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
