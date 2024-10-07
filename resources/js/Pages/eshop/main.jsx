import React from 'react'
import Header from '../lyshop/header'
import Produtos from '../produtos/Produtos'
import Banner from '../img/banner.jpg'
import Carrosel from '../carrosel/carrosel';
function main ({ produtos }) {
  return (

   <div className='flex flex-col min-h-screen'>
    <div className='min-w-full'>
     <Header />
    </div>
    <div className='' >
        <div className='flex justify-center'>
        <img src={Banner} alt="img" />
        </div>
        <div className='w-screen'>
          <Carrosel />
        </div>
        <div className='flex justify-center m-6'>
          <Produtos produtos={produtos} />
        </div>
    </div>
   </div>
  )
}

export default main
