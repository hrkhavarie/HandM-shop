
import Image from 'react-image-webp';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import ProductImage from './ProductImage';
import { Link, redirect } from 'react-router-dom';
const ProductCard = ({product}) => {
  const {name ,variantSizes, images ,rgbColors , price,articleColorNames, brandName , categoryName , id } = product


  // console.log('price',price.formattedValue);
  // console.log(images);

  const handleClick = ()=>{
    redirect(`/shop/${id}`)
  }
  return (
    <div className="col-md-4">
    <div className="card mb-4" >
      

     <ProductImage  images={images}/>
      
      <div className="card-body">
       <h5 className="card-title">{name}  </h5>
       <div className="d-flex justify-content-between">

        <div className="card-text">{brandName}</div>
        {/* <p className="card-text">{categoryName}</p> */}
        <p className="card-text fw-bold">{price.formattedValue}</p> 
       </div>
       <div className='mb-3 mt-2' >
                {
                  rgbColors?.map(color=>(
                  
                    <span className="badge rounded-pill m-1  d-inline " key={color.id} style={{backgroundColor: `${color}`}}>C</span>
                    
                    ))
                  }
                  </div>

        
<div className="d-flex justify-content-between align-items-center mb-3">

          <span>Size:</span>
 
            <select className="form-select " aria-label="Default select example" >
          {
            variantSizes.map((size)=>
            {
              
              <option value={size.filterCode} key={size.id}>{size.filterCode}</option>
            
            }
              
              
              
              )
            }
              </select>
              

            </div>
              
          
           
          
          <div className="d-grid gap-2 d-md-flex justify-content-md-between">
  <button className="btn btn-info" type="button">Compare</button>
  <button className="btn btn-primary" type="button"><i className="bi bi-basket"></i>Add to Basket</button>
</div>
       
      </div>
    </div>
  </div>
  )
}

export default ProductCard

