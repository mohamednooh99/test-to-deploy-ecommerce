const { default: axiosClient } = require("./axiosClient");



const getLatestProducts = () => axiosClient.get('/products?populate=*')
  .catch((error) => {
    console.error('Error fetching latest products:', error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });
 
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)
  .catch((error) => {
    console.error(`Error fetching product with ID ${id}:`, error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });

const getProductByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
  .catch((error) => {
    console.error(`Error fetching product with ID ${id}:`, error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });

export default { getLatestProducts, getProductById ,getProductByCategory };
