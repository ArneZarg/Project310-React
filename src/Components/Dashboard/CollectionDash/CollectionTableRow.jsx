import {Link} from 'react-router-dom';

const CollectionTableRow = ({collection,handleDelete}) => {
    return(
        <tr key={collection.id}>
            <td>{collection.title}</td>
            <td>{collection.collectionProducts.length}</td>
            <td><Link className='btn btn-primary' to={`/dashboard/collections/${collection.id}`}>Edit</Link></td>
            <td><button className='btn btn-danger' onClick={() => handleDelete(collection.id)}>Delete</button></td>
        </tr>
    )
}

export default CollectionTableRow;