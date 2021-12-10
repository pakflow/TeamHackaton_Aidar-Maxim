import React, { createContext, useReducer } from "react";
import axios from "axios";
export const productsContext = createContext();
const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getProducts() {
    const result = await axios.get(API);
    dispatch({ type: "GET_PRODUCTS", payload: result.data });
  }

  async function getOneProduct(id) {
    const result = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: result.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }
  return (
    
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        getProducts,
        getOneProduct,
        deleteProduct,
        createProduct,
        updateProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
