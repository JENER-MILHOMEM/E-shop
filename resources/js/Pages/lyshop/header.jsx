import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from '@inertiajs/react';
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  let hideTimeout;


  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setShowCategories(true);
  };

  
  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setShowCategories(false);
    }, 300); 
  };

  useEffect(() => {
    return () => clearTimeout(hideTimeout); 
  }, []);

  return (
    <nav className="bg-black text-white pt  -4 w-screen">
      <div className="mx-auto w-screen">
        
        <div className="flex justify-between items-center px-5">
         
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-24 h-24" />
            
          </div>

         
          <div className="flex-1 mx-10">
            <div className="relative pl-44">
              <input
                type="text"
                className="w-9/12 px-4 py-2 text-black rounded-full focus:outline-none"
                placeholder="O que você está buscando?"
              />
              <button className="absolute right-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                </svg>
              </button>
            </div>
          </div>

          
          <div>
            <Link href="/profile" className="flex items-center space-x-2">
              <span className='hover:underline'>My account</span>
              <div className='text-3xl'>
                <FaRegUserCircle />
              </div>
            </Link>
          </div>
        </div>

        <div className='py-2'>
          <hr />
        </div>

        
        <div className="mt-2 pb-2 flex px-5 space-x-8 relative">
         
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button>
              <div className='flex space-x-1.5'>
                <AiOutlineMenu className='text-2xl' />
                <h1>Categorias</h1>
              </div>
            </button>

            {showCategories && (
              <div className="absolute bg-white text-black mt-2 p-4 grid grid-cols-3 gap-4 shadow-lg w-80 z-50">
                <a href="#" className="hover:underline">Original</a>
                <a href="/produtos/masculino" className="hover:underline">Masculino</a>
                <a href="#" className="hover:underline">Feminino</a>
                <a href="#" className="hover:underline">Esportivo</a>
                <a href="#" className="hover:underline">Unissex</a>
                <a href="#" className="hover:underline">Infantil</a>
              </div>
            )}
          </div>

         
          <div className="relative flex items-center">
            <div className="absolute left-[-15px] w-[1px] h-16 bg-white transform"></div>
          </div>

          <a href="#" className="hover:underline">
            Produtos
          </a>
          <a href="#" className="hover:underline">
            Contato
          </a>
          <a href="#" className="hover:underline">
            Rastreie Seu Pedido
          </a>
          <a href="#" className="hover:underline">
            Políticas
          </a>
        </div>

        <div className='py-2'>
          <hr />
        </div>
      </div>
    </nav>
  );
}