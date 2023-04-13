import { Link } from 'react-router-dom';
import {getProducts,deleteProduct} from './product-dash-calls';
import { useEffect,useState } from 'react';
import ProductTableRow from './ProductTableRow';


const ProductsDash = () =>{
    const [productsData, setProductsData] = useState([])
    const [productRows, setProductRows] = useState([])

    const getProductInfo = async () => {
        const data = await getProducts();
        setProductsData(data);
        renderProductTable(data)
    }

    const handleDelete = async (id) => {
        const result = await deleteProduct(id);
        getProductInfo();
    }

    const renderProductTable = (data) => {
        setProductRows(
            data.map((p)=>{
                return(<ProductTableRow product={p} handleDelete={handleDelete}/>)
            })
        )
    }
    useEffect(()=>{
        getProductInfo();
    },[])

    return(
        <div className="products-dashboard">
            <h3>Products</h3>
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {productRows}
                    </tbody>
                </table>
            </div>
            <div className='add-new-product'>
                <Link className='btn btn-secondary' to={'/dashboard/add/product'}>+ New Product</Link>
            </div>
        </div>
    )
}

export default ProductsDash;