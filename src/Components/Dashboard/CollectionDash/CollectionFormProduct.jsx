const CollectionFormProduct = ({product,removeHandler}) => {
    return(
        <div className="form-child">
            <div className="img-and-title">
                <div className="featured-img">
                    <img src={product.featuredImageSrc}/>
                </div>
                <strong>{product.title}</strong>
            </div>
            
            <div className="form-child-price">
                ${product.price}
            </div>
            <div>
                <button className="btn btn-danger" onClick={(e) => {removeHandler(e,product)}}>Remove From Collection</button>
            </div>
        </div>
    )
}

export default CollectionFormProduct;