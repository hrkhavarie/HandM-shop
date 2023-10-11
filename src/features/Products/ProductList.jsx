import ProductCard from './ProductCard'
import {  fetchProducts, getMenu } from "../../utils/services";
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import Search from './search';
import { useState } from 'react';
import ProductFilters from './ProductFilters';

 function  ProductList({ProductList}){


  const [query, setQuery] = useState('');
  const allProducts = useLoaderData();
  const {results} = allProducts;
  const {facets} = allProducts;
  const concepts = facets[0];
  const {values} = concepts;
  // console.log('results:',results);
  // console.log('concepts',concepts);
  // console.log('optins',facets);
  // const search =(results)=> results.filter((products=>products.name.toLowerCase().includes(query)))
  const price = (results=>results.filter(product=>product.price[4] < 40))
  // const price = results.filter(product=>product.price.map(price=>price.value))

  // console.log('price',price);

  // const menu = useLoaderData();

  // const {products} = allProducts;
  // console.log('productslist', results);

  

  return (
    
      <div className="col-md-9">
        {/* <!-- Product list --> */}
        
        <div className="row">
        
          {
            ProductList
              // .filter((products)=>products.name.toLowerCase().includes(query))
            .map(product=>

              <ProductCard key={product.id} product={product} />
            )
          }


        </div>
      </div>
    
  )
}



// export async function loader() {
//   const menu = await getMenu();
//   return menu;
// }

export default ProductList