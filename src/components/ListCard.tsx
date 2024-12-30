import React from 'react'
import Image from 'next/image'


const ListCard = () => {
  return (
    <>
    <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020] ">
        <div className='flex items-center gap-2'>
            <Image
            src='/xnc.jpg' alt='img' width={60} height={60}/>
        <div>
            <h3 className='text-[20px]'>First Project</h3>
            <p className='text-[grey] text-[14px]'>created on 30/12/2024</p>
        </div>
        </div>
        <div>
            <Image
            src='/delete.png' alt='img' width={30} height={30}/>
        </div>
    </div>
    </>
  )
}

export default ListCard