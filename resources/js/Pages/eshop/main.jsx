import React from 'react'
import Header from '../lyshop/header'

import Banner from '../img/banner.jpg'
import Carrosel from '../carrosel/carrosel';
function main() {
  return (

   <div className='flex flex-col'>
    <div>
     <Header />
    </div>
    <div className='' >
        <div className='flex justify-center'>
        <img src={Banner} alt="img" />
        </div>
        <div>
          <Carrosel />
        </div>
    </div>
   </div>
  )
}

export default main
