import {Link} from 'react-router-dom';

const ProductTableRow = ({product,handleDelete}) => {
    return(
        <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td><img className='thumbnail' width={20} src={product.featuredImageSrc}/></td>
                    <td><Link className='btn btn-primary' to={`/dashboard/products/${product.id}`}>Edit</Link></td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button></td>
                </tr>
    )
}

export default ProductTableRow;