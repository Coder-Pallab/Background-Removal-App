import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent'>Steps to remove background <br/> image in seconds</h1>

        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

            <div className='flex items-start gap-4 bg-white border border-gray-200 drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
                <img className='max-w-9' src={assets.upload_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Upload image</p>
                    <p className='text-sm text-neutral-500 mt-1'>Choose any photo you want to edit —<br/> just drag and drop or click to upload.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border border-gray-200 drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Remove background</p>
                    <p className='text-sm text-neutral-500 mt-1'>Our AI instantly removes the background<br/> with perfect precision.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border border-gray-200 drop-shadow-md p-7 pb-10 rounded hover:scale-105 tarnsition-all duration-500'>
                <img className='max-w-9' src={assets.download_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Download image</p>
                    <p className='text-sm text-neutral-500 mt-1'>Preview your result and download<br/> the high-quality cutout in seconds.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps