import React, {useContext} from 'react'
import { StateContext } from '../context/GlobalState'
import ProductCard from '../component/ProductCard'
const HomeDecoration = () => {
    const { products } = useContext(StateContext)
    const home = products.filter((product) => product.category === "home" );
    
    return (
        <div className="home__decoration">
            <div className="product__cards">
                    {
                        home.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default HomeDecoration
