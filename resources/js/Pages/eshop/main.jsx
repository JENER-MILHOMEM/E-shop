import React from 'react'
import Header from '../lyshop/header'
import Produtos from '../produtos/Produtos'
import Banner from '../img/banner.jpg'
import Carrosel from '../carrosel/carrosel';
import Gif from '../img/gif.gif'
function main ({ produtos }) {
  return (

   <div className='flex flex-col min-h-screen'>
    <div className='min-w-full'>
     <Header />
    </div>
    <div className='flex flex-col' >
        <div className='flex justify-center'>
        <img src={Banner} alt="img" />
        </div>
        <div className='w-screen'>
          <Carrosel />
        </div>
       <div className='py-4 text-center px-3.5 text-3xl '>
        <h1 className='text-white font-mono'>Lançamentos</h1>
       </div>
        <div className='flex justify-center m-6 '>
            
          <Produtos produtos={produtos} />
        </div>
        <div className='flex justify-center py-10'>
          <img src={Gif} alt="gif" />
        </div>
    </div>
    <div className='py-4 text-center px-3.5 text-3xl'>
      <h1 className='text-white font-mono'>Linha Premium </h1>
    </div>
   </div>
  )
}

export default main
