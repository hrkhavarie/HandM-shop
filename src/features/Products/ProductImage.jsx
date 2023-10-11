import React from 'react'

export default function ProductImage({images}) {
  return (
    <div className='imageholder'>
         {
        images.map(img=>(
          <div key={img.url}>
            
              <img className='img-fluid' src={img.baseUrl} alt='image' />
              
          </div>
        ))
      }
    </div>
  )
}
