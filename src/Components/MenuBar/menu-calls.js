import axios from 'axios';

const getCollections = async () => {
    try{
        const response = await axios.get('https://localhost:7147/api/CollectionAPI');
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

export default getCollections;