import { useEffect,useState } from "react";
import { getProducts } from "../ProductsDash/product-dash-calls";

const CollectionFormAddProduct = ({visible, collectionId}) => {
    const [productData, setProductData] = useState({})
    const [productList, setProductList] = useState([])
    
    const getProductInfo = async () => {
        const data = await getProducts();
        setProductData(productData);
        mapProductList(data);
    }
    
    const mapProductList = (data) => {
        setProductList(data.map(p => { return(
                <div className={collectionId == p.collectionId ? "product-in-list disabled-item" : "product-in-list"}>
                    <div className="img-title">
                        <div className="featured-img">
                            <img src={p.featuredImageSrc}/>
                        </div>
                        <strong>{p.title}</strong>
                    </div>
                    <div className="product-price-list">
                        ${p.price}
                    </div>
                </div>
            )
        }));
    }

    useEffect(()=>{
        getProductInfo();
    },[])

    return(
        <div className={visible ? "modal" : "modal-hidden"}>
            <div className="modal-overlay">
            </div>
            <div className="modal-container">
                <h2>Add A Product</h2>
                <div className="modal-product-list">{productList}</div>
            </div>
        </div>
    )
}

export default CollectionFormAddProduct;