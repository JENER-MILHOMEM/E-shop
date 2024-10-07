import React from 'react';

const Produtos = ({ produtos }) => {
  return (
    <div className='text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full overflow-x-hidden px-4 '>
      {produtos && produtos.length > 0 ? (
        produtos.map((produto) => (
          <div key={produto.id} className='flex flex-col bg-gray-300 py-4 px-3 gap-2 rounded-lg shadow-md   '>
            <div className='flex justify-center'>
              <img src={`/storage/${produto.imgs}`} alt={produto.nome} className='w-60 h-52 rounded-xl transform   transition duration-500 hover:scale-105 ' />
            </div>
            <div className='text-center text-black font-bold text-md'>
              <p>{produto.nome.toUpperCase()}</p>
            </div>
            <div className='text-black px-1 text-center'>
              <p className='text-xl font-semibold'>R$ {produto.preco.toFixed(2)}</p>
            </div>
            <div className='flex justify-center fonte-mono'>
            <button class="m-4 p-0.5 from-indigo-800 via-pink-500 to-purple-700 bg-gradient-to-r px-16 py-2">
      <span class="block  font-semibold text-white transition hover:backdrop-brightness-110 ">comprar</span>
      </button>
          </div>
            <div className='text-center text-black text-sm'>
              <p>{produto.estoque} em estoque</p>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
    </div>
  );
};

export default Produtos;
