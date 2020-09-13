import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const Menclothes = () => {
    const { products } = useContext(StateContext)
    const menclothes = products.filter((product) => product.category === "men's clothes" );
    
    return (
        <div className="men__clothes">
            <div className="product__cards">
                    {
                        menclothes.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default Menclothes
