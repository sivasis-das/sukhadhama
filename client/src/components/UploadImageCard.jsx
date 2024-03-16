import React from 'react'
import { RxCross2 } from "react-icons/rx";
function UploadImageCard({data, id,handleImageDelete}) {
  return (
    <div  className='flex items-center justify-between p-1 border border-orange-600 rounded-lg mb-2 shadow-md'>
        <img src={data}  alt="upload image" className='w-24 h-12 object-cover rounded-lg' />
        <button onClick={()=>handleImageDelete(id)} type='button'><RxCross2 size={20} className='text-gray-500'/></button>
    </div>
  )
}

export default UploadImageCard