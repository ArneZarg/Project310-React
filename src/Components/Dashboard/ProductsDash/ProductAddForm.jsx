import {useState,useEffect} from 'react';
import { postProduct } from './product-dash-calls';
import { useNavigate } from 'react-router-dom';
import { getCollections } from '../CollectionDash/collection-dash-calls';

const ProductAddForm = () => {
    const [formData, setFormData] = useState({
        title:'',
        price:0,
        compareAtPrice:0,
        handle:'',
        featuredImageSrc:'',
        collectionId:null
    });
    const [success, setIsSuccess] = useState(null);
    const [collectionData, setCollectionData] = useState([])
    const [collectionOptions, setCollectionOptions] = useState([])
    const navigate = useNavigate();

    const handleFormChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    }

    const getCollectionData = async () => {
        const data = await getCollections();
        setCollectionData(collectionData);
        console.log(data);
        mapOptions(data);
    }

    const mapOptions = (data) => {
        setCollectionOptions(data.map(c=>{
            return(<option value={c.id}>{c.title}</option>)
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isSuccess = await postProduct(formData);
        if(isSuccess == false){
            setIsSuccess(isSuccess);
        }else{
            navigate('/dashboard/products')
        }
    }

    useEffect(()=>{
        getCollectionData();
    },[])

    return(
        <div className='product-form-wrapper'>
            <h3>Add New Product</h3>
            <div className="form-inner">
                <form>
                    <div className='form-col'>
                        <label htmlFor="title">Product Title: </label>
                        <input value={formData.title} onChange={handleFormChange} name="title" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="price">Product Price ($USD): </label>
                        <input value={formData.price} onChange={handleFormChange} name="price" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="compareAtPrice">Product Compare-At Price ($USD): </label>
                        <input value={formData.compareAtPrice} onChange={handleFormChange} name="compareAtPrice" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="handle">Product Handle: </label>
                        <input value={formData.handle} onChange={handleFormChange} name="handle" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="featuredImageSrc">Featured Image</label>
                        <input value={formData.featuredImageSrc} onChange={handleFormChange} name="featuredImageSrc" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor='collectionId'>Select A Collection:</label>
                        <select name="collectionId" onChange={handleFormChange} value={formData.collectionId}>
                            <option value={null}>No Collection</option>
                            {collectionOptions}
                        </select>
                    </div>
                    <div className="form-button-container">
                        <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Add New Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductAddForm;