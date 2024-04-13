import React from 'react'

function ArticleCards({image, tag, headline}) {
  let lengthOfHeadline = headline.length;
  let truncatedHeadline;
  if(lengthOfHeadline > 60){
    truncatedHeadline = headline.slice(0,62)+"..."
  }else{
    truncatedHeadline = headline
  }
  return (
    <div className=' rounded-2xl overflow-hidden min-w-72 max-w-72 min-h-64 relative drop-shadow-lg cursor-pointer hover:shadow-xl'>
      <div className='h-full flex flex-col bg-white  '>
        <img src={image} alt="photos" className='h-3/4 object-center object-cover'/>
         <p className='w-11/12 m-auto my-3  h-12'>{truncatedHeadline}</p>
      </div>
      <div className='bg-blue-600 absolute top-2 left-2 text-white px-2 rounded-xl text-sm'>{tag}</div>
      
     
    </div>
  )
}

export default ArticleCards