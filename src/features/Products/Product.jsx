import  { useState } from 'react'
import ProductList from './ProductList'
import { fetchProducts } from '../../utils/services';
import { useLoaderData } from 'react-router-dom';
import ProductFilters from './ProductFilters';

const Product = () => {
  const allProducts = useLoaderData();
  const {results} = allProducts;
  const [filteredText, setfilteredText] = useState('Men')
  const [fiteredPrice, setfiteredPrice] = useState(60)
  const [newProductList , updateProductList]= useState(results)


const filteredProductPrice = newProductList.filter(product=>{
    if(fiteredPrice > product.price.value)
    // console.log('fiterred price',fiteredPrice);
    // console.log('fiterred price pro',product.price.value);
    return product
})

// console.log('productsss',filteredProductPrice);
// const filteredProductsList = newProductList.filter((product)=>{
//     if(filteredText === product.categoryName)  
//     return product    

// })
console.log('NewProductlist',newProductList);


    function onFilteredPriceSelected (fiteredPrice){
        setfiteredPrice(fiteredPrice)

    }

    function onfilteredValueSelected(filterValue){
        // console.log(filterValue);
        setfilteredText(filterValue)
    
      }

      function createProductList(product){
        product.id = newProductList.length +1;
        updateProductList([product ,  ...newProductList]);
      }
  return (
    <>
    <div className="container">
        <div className="shop-header text-center mt-4 mb-4 border-raduis-2  ">
        <h2 className='pt-4'>Product List</h2>
        </div>
    <div className="row">
      <ProductFilters fliterValueSelected={onfilteredValueSelected} onFilteredPriceSelected={onFilteredPriceSelected}  />
      <ProductList ProductList={filteredProductPrice}/>

        </div>
        </div>
    </>
  )
}

export async function loader(){
    // const cat = filters.categories= 'men_all'
    const results = await fetchProducts();
     return results
  }

export default Product