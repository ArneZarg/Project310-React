import axios from 'axios';

const getProductByHandle = async (handle) => {
    try{
        const response = await axios.get(`https://localhost:7147/api/ProductAPI/${handle}`);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

export default getProductByHandle;