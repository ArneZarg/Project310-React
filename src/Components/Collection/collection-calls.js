import axios from 'axios';

const getCollectionByHandle = async (handle) => {
    try{
        const response = await axios.get(`https://localhost:7147/api/CollectionAPI/${handle}`);
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

export default getCollectionByHandle;