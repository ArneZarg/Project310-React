import {useEffect, useState, useRef} from 'react';
import getProductByHandle from './product-calls';
import {useParams} from 'react-router-dom';
import './product.css';
const Product = () => {
    const [productData, setProductData] = useState({});
    const [variantData, setVariantData] = useState([]);
    const [selectedVariant, setSelectedVariant] = useState({});
    const {handle} = useParams();
    
    const selection = useRef(null);

    const handleChange = () =>{
        const value = selection.current.value;
        for(let v in variantData){
            let variant = variantData[v];
            if(variant.id == value){
                setSelectedVariant(variant);
            }
        }
    }

    const getProduct = async () =>{
        const product = await getProductByHandle(handle);
        setProductData(product);
        if(product.variants.length > 0){
            setVariantData(product.variants);
            setSelectedVariant(product.variants[0]);
        }
        console.log(product)
    }

    useEffect(()=>{
        getProduct();
    },[handle])

    return(
        <div className='main-layout'>
            <div className='product-page'>
                <div className='main-layout'>
                <h1>
                    {productData.title}
                </h1>
                <div className="product-top">
                    <div className='product-left'>
                        <img src={ selectedVariant.featuredImgSrc ? selectedVariant.featuredImgSrc : productData.featuredImageSrc}/>
                    </div>
                    <div className='product-right'>
                        {selectedVariant.id ?
                        <>
                            <div>
                                <label htmlFor='variantSelect'>Choose your variant:</label>
                                <select id='variantSelect' ref={selection} onChange={handleChange}>
                                    {variantData.map(v => {
                                        return <option key={v.id} value={v.id}>{v.variantTitle}</option>
                                    })}
                                </select>
                            </div>
                            <br/>
                        </>
                        : null}
                        
                        <div className="product-price">Price: <strong>${selectedVariant.variantPrice ? selectedVariant.variantPrice : productData.price}</strong> <span className='compare-price'>{selectedVariant.variantComparePrice ? `$${selectedVariant.variantComparePrice}`  : `$${productData.compareAtPrice}` }</span></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Product;