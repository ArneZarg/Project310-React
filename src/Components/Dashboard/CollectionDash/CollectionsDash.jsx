import { Link } from 'react-router-dom';
import {getCollections,deleteCollection} from './collection-dash-calls';
import { useEffect,useState } from 'react';
import CollectionTableRow from './CollectionTableRow';


const CollectionsDash = () =>{
    const [collectionsData, setCollectionsData] = useState([])
    const [collectionRows, setCollectionRows] = useState([])

    const getCollectionInfo = async () => {
        const data = await getCollections();
        setCollectionsData(data);
        renderCollectionTable(data)
    }

    const handleDelete = async (id) => {
        const result = await deleteCollection(id);
        getCollectionInfo();
    }

    const renderCollectionTable = (data) => {
        setCollectionRows(
            data.map((c)=>{
                return(<CollectionTableRow collection={c} handleDelete={handleDelete}/>)
            })
        )
    }
    useEffect(()=>{
        getCollectionInfo();
    },[])

    return(
        <div className="products-dashboard">
            <h3>Collections</h3>
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>Collection Title</th>
                        <th>Products</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {collectionRows}
                    </tbody>
                </table>
            </div>
            <div className='add-new-product'>
                <Link className='btn btn-secondary' to={'/dashboard/add/collection'}>+ New Collection</Link>
            </div>
        </div>
    )
}

export default CollectionsDash;