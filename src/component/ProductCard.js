import React from 'react'
import '../css/ProductCard.css'
const ProductCard = ({picture, price}) => {
    return (
        <div className="productCard">
            <img src={picture} alt='' />
            <p>{price}</p>
        </div>
    )
}

export default ProductCard
