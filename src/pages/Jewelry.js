import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const Jewelry = () => {
    const { products } = useContext(StateContext)
    const jewelry = products.filter((product) => product.category === "jewelry & accessories" );
    
    return (
        <div className="jewelry">
            <div className="product__cards">
                    {
                        jewelry.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default Jewelry 
