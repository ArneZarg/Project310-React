import {useState,useEffect} from 'react';
import { updateProduct } from '../ProductsDash/product-dash-calls';
import { updateCollection,getCollectionById } from './collection-dash-calls';
import { useParams,useNavigate } from 'react-router-dom';
import CollectionFormProduct from './CollectionFormProduct';
import CollectionFormAddProduct from './CollectionFormAddProduct';

const CollectionEditForm = () => {
    const [formData, setFormData] = useState({
        title:'',
        handle:'',
        excerpt:'',
        bannerImgSrc:'',
    });
    const [products, setProducts] = useState([])
    const [success, setIsSuccess] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleFormChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isSuccess = await updateCollection(id,formData);
        if(isSuccess == false){
            setIsSuccess(isSuccess);
        }else{
            navigate('/dashboard/collections')
        }
    }

    const populateForm = (data) => {
        setFormData({
            id:id,
            title:data.title,
            excerpt:data.excerpt,
            handle:data.handle,
            bannerImgSrc:data.bannerImgSrc
        })
    }

    const handleRemoveProductFromCollection = async (e,product) =>{
        e.preventDefault();
        let data = product;
        data.collectionId = null;
        await updateProduct(data.id,data);
        const col = await getCollectionById(id);
        mapProductsInCollection(col.collectionProducts);
    }

    const mapProductsInCollection = (collectionProducts) => {
        setProducts(collectionProducts.map(cp => {
            return(<CollectionFormProduct key={cp.id} product={cp} removeHandler={handleRemoveProductFromCollection}/>)
        }))
    }

    const getCollectionInfo = async () => {
        const data = await getCollectionById(id);
        // console.log(data);
        populateForm(data);
        const collectionProducts = data.collectionProducts;
        mapProductsInCollection(collectionProducts);
    }

    useEffect(()=>{
        getCollectionInfo();
    },[])

    return(
        <div className='product-form-wrapper'>
            <h3>Edit Collection</h3>
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
                    <div className='form-children-container'>
                        <h4>Products in Collection: </h4>
                        {products}
                        <div className='form-child'>
                            <div className='add-btn'>
                                <button className='btn btn-secondary'>+ Add Product to Collection</button>
                            </div>
                        </div>
                    </div>
                    <CollectionFormAddProduct visible={true} collectionId={id}/>
                    <div className="form-button-container">
                        <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Update Collection</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CollectionEditForm;