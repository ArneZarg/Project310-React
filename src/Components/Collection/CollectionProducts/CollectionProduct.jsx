import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionProduct.css'

const CollectionProduct = ({title,handle,featuredImageSrc,price,compareAtPrice,collectionId}) =>{
    const hasComparePrice = compareAtPrice != null && compareAtPrice > 0;
    return(
        
        <Link className={`product-card ${collectionId == 1 ? 'shake' : null}`} to={`/products/${handle}`}>
            <h3>{title}</h3>
            <img src={featuredImageSrc}/>
            <div>
                <strong>${price}</strong>&nbsp;<span className='compare-at-price'>{hasComparePrice ? `$${compareAtPrice}`: null}</span>
            </div>
        </Link>
        
    )
}

export default CollectionProduct;