import {useState,useEffect} from 'react';
import { postCollection } from './collection-dash-calls';
import { useNavigate } from 'react-router-dom';

const CollectionAddForm = () => {
    const [formData, setFormData] = useState({
        title:'',
        handle:'',
        excerpt:'',
        bannerImgSrc:'',
    });
    const [success, setIsSuccess] = useState(null);
    const navigate = useNavigate();

    const handleFormChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isSuccess = await postCollection(formData);
        if(isSuccess == false){
            setIsSuccess(isSuccess);
        }else{
            navigate('/dashboard/collections')
        }
    }

    return(
        <div className='product-form-wrapper'>
            <h3>Add New Collection</h3>
            <div className="form-inner">
                <form>
                    <div className='form-col'>
                        <label htmlFor="title">Collection Title: </label>
                        <input value={formData.title} onChange={handleFormChange} name="title" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="handle">Collection Handle: </label>
                        <input value={formData.handle} onChange={handleFormChange} name="handle" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="excerpt">Collection Excerpt: </label>
                        <input value={formData.excerpt} onChange={handleFormChange} name="excerpt" type="text"/>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="bannerImgSrc">Collection Banner: </label>
                        <input value={formData.bannerImgSrc} onChange={handleFormChange} name="bannerImgSrc" type="text"/>
                    </div>
                    <div className="form-button-container">
                        <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Add New Collection</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CollectionAddForm;