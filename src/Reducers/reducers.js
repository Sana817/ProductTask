// resucers are how it should be done
const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    // case "EDIT_PRODUCT":
    //   return state.map((product) =>
    //     product.id === action.id
    //       ? { ...product, editing: !product.editing }
    //       : product
    //   );
    case "UPDATE_PRODUCT":
      console.log("updating a product" + action.product.id);
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.product.id) {
            return {
              ...product,
              color: action.product.color,
              price: action.product.price,
              image: action.product.image,
              editing: !product.editing,
            };
          } else {
            return product;
          }
        }),
      };

    case "DELETE_PRODUCT":
      console.log("deleting " + action.id);
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };

    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
