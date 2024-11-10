const { default: axiosClient } = require("./axiosClient");



const addToCart = (payload) => axiosClient.post('/carts', payload)
  .catch((error) => {
    console.error('Error fetching latest products:', error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });

const getUserCartItem = (email) => axiosClient
  .get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)
  .catch((error) => {
    console.error('Error get user products:', error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });
 
  const deleteCartItem = (documentId) => axiosClient.delete(`/carts/${documentId}`)
  .catch((error) => {
    console.error(`Error fetching product with ID ${documentId}:`, error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });

export default {addToCart ,getUserCartItem,deleteCartItem}