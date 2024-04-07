import React from 'react'
import { BiSolidBadgeDollar } from "react-icons/bi";
function Card({title, description, link}) {
  return (
    <div className='rounded-md px-2 py-3 border border-slate-300 hover:border-black w-full h-full'>
        <div className='flex h-full gap-3'>
            <div className='lg:hidden  text-orange-600'><BiSolidBadgeDollar  size={60}/></div>
            <div className='flex-1 flex flex-col'>
                <div className='flex items-end justify-between'>
                    <p className='font-bold text-lg'>{title}</p>
                    <div className='hidden lg:block'><BiSolidBadgeDollar className='text-orange-600' size={60}/></div>
                </div>
                
                <p className='mt-3 text-wrap'>{description}</p>
                <p className='mt-auto underline text-lg font-bold'>{link}</p>
            </div>
        </div>
    </div>
  )
}

export default Card