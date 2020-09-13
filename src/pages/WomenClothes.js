import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const WomenClothes = () => {
    const { products } = useContext(StateContext)
    const womenClothes = products.filter((product) => product.category === "women's clothes" );
    
    return (
        <div className="women__clothes">
            <div className="product__cards">
                    {
                        womenClothes.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default WomenClothes
