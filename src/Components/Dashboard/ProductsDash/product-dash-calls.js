import axios from 'axios';

const getProducts = async () => {
    try{
        const response = await axios.get(`https://localhost:7147/api/ProductAPI/`);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

const getProductById = async (id) => {
    try{
        const response = await axios.get(`https://localhost:7147/api/ProductAPI/${id}`);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

const updateProduct = async (id,data) => {
    try{
        const response = await axios.put(`https://localhost:7147/api/ProductAPI/${id}`,data);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

const postProduct = async (data) => {
    try{
        const response = await axios.post(`https://localhost:7147/api/ProductAPI/`,data);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

const deleteProduct = async (id) => {
    try{
        const response = await axios.delete(`https://localhost:7147/api/ProductAPI/${id}`);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

export {getProducts,getProductById,updateProduct,postProduct,deleteProduct};