import axios from 'axios';

const getCollections = async () => {
    try{
        const response = await axios.get(`https://localhost:7147/api/CollectionAPI/`);
        console.log(response);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

const getCollectionById = async (id) => {
    try{
        const response = await axios.get(`https://localhost:7147/api/CollectionAPI/${id}`);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

const deleteCollection = async (id) => {
    try{
        const response = await axios.delete(`https://localhost:7147/api/CollectionAPI/${id}`);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

const postCollection = async (data) => {
    try{
        const response = await axios.post(`https://localhost:7147/api/CollectionAPI/`,data);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

const updateCollection = async (id,data) => {
    try{
        const response = await axios.put(`https://localhost:7147/api/CollectionAPI/${id}`,data);
        return response.data.isSuccess;
    }catch(error){
        console.log(error);
        return false;
    }
}

export {getCollections, deleteCollection, postCollection, updateCollection, getCollectionById}