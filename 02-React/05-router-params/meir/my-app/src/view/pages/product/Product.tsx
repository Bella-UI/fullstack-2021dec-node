import {Link, useParams} from 'react-router-dom';
import { ProductCardProps } from '../products/ProductCard';
import {products, ProductsProps} from '../products/Products';

const Product = () => {
    const {productId} = useParams();
    const product = getProduct(productId, products);
    return (
     
        <div>
          <Link to='/products'>Back</Link>
          
          <h1>Product: {product?product.id : null}</h1>
          
        </div>
        
    );
};

export default Product

function getProduct(
    productId:string|undefined,
     products:ProductsProps[]
     ):ProductsProps|undefined{
  if(productId) {
    return products.find((prd) => prd.id === productId);
  } else {
    return undefined
  }
}
