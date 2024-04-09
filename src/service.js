import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getData;
