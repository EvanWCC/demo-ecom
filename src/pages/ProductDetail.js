import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const { products } = useContext(StateContext);
    const productId = useParams();
    
    const theProduct = products.find(p => p.id === productId.id  )
    
    console.log(theProduct)
   
    return (
        <div className="productDetail">
             <img src={theProduct.image} alt='' />
             <div className="productDetail__content">
                <h3>{theProduct.title}</h3>
                <p>{theProduct.price}</p>
            </div> 
           
        </div>
    )
}

export default ProductDetail
