import React from 'react'
import '../css/ProductCard.css'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {
    const {price,id,image} = product
    return (
        <div className="productCard">
            <Link to={`/${id}`}>
                <img src={image} alt='' />
            </Link>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard
