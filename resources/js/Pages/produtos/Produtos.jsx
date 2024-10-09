import React from 'react';
import { motion } from 'framer-motion';

const Produtos = ({ produtos }) => {
  return (
    <div className='text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-full overflow-x-hidden py-10 px-4'>
      {produtos && produtos.length > 0 ? (
        produtos.map((produto) => (
          <motion.div
            key={produto.id}
            className='flex flex-col bg-gray-300 py-4 px-3 gap-2 rounded-lg shadow-md'
            initial={{ opacity: 0, y: 30 }} // Estado inicial (transparente e deslocado para baixo)
            whileInView={{ opacity: 1, y: 0 }} // Animação quando o produto entra na área visível
            transition={{ duration: 0.5, ease: 'easeOut' }} // Tempo da animação
            whileHover={{ scale: 1.05 }} // Aumenta ligeiramente ao passar o mouse
            viewport={{ once: true, amount: 0.2 }} // Animação dispara uma vez quando 20% do item estiver visível
          >
            <div className='flex justify-center'>
              <img
                src={`/storage/${produto.imgs}`}
                alt={produto.nome}
                className='w-60 h-52 rounded-xl transform transition duration-500 hover:scale-105'
              />
            </div>
            <div className='text-center text-black font-bold text-md'>
              <p>{produto.nome.toUpperCase()}</p>
            </div>
            <div className='text-black px-1 text-center'>
              <p className='text-xl font-semibold'>R$ {produto.preco.toFixed(2)}</p>
            </div>
            <div className='flex justify-center fonte-mono'>
              <button className='m-4 p-0.5 from-indigo-800 via-pink-500 to-purple-700 bg-gradient-to-r px-16 py-2 transition duration-500 hover:scale-105'>
                <span className='block font-semibold text-white transition hover:backdrop-brightness-110'>comprar</span>
              </button>
            </div>
            <div className='text-center text-black text-sm'>
              <p>{produto.estoque} em estoque</p>
            </div>
          </motion.div>
        ))
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
    </div>
  );
};

export default Produtos;
