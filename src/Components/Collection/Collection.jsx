import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import getCollectionByHandle from './collection-calls';
import CollectionProduct from './CollectionProducts/CollectionProduct';
import './Collection.css'

const Collection = () =>{
    const [collectionTitle, setCollectionTitle] = useState("");
    const [productData, setProductsData] = useState([]);
    const [productComponents, setProductComponents] = useState([])
    const {handle} = useParams();

    const getCollectionInfo = async () => {
        const collectionData = await getCollectionByHandle(handle)
        setCollectionTitle(collectionData.title);
        setProductsData(collectionData.collectionProducts)
        mapProducts(collectionData.collectionProducts);
    }

    const mapProducts = (products) => {
        console.log(products);
        const parr = []
        products.map(p => {
            parr.push(
                <CollectionProduct 
                    key={p.id} 
                    handle={p.handle}
                    price={p.price}
                    featuredImageSrc={p.featuredImageSrc}
                    compareAtPrice={p.compareAtPrice}
                    title={p.title}
                    collectionId={p.collectionId}
                />
            )
        });
        setProductComponents(parr)
    }
    
    useEffect(()=>{
       getCollectionInfo();
    },[handle])

    return(
        <div className='main-layout'>
            <h1>{collectionTitle}</h1>
            <div className='collection-container'>
                {productComponents}
            </div>
        </div>
    )
}

export default Collection;