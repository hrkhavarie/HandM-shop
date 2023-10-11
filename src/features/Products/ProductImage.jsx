import React from 'react'

export default function ProductImage({images}) {
  return (
    <div className='imageholder'>
         {
        images.map(img=>(
          <span key={img.id}>
            
              <img className='img-fluid' src={img.baseUrl} alt='image' />
              
          </span>
        ))
      }
    </div>
  )
}
