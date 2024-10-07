import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Create = () => {
  const { data, setData, post, errors } = useForm({
    nome: '',
    preco: '',
    categoria: '',
    marca: '',
    imgs: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/criarProduto');
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className='flex flex-col  items-center m-56 gap-2'>
      <div className='flex flex-col text-center'>
        <label className=' text-white'>Nome</label>
        <div>
        <input
          type="text"
          value={data.nome}
          onChange={(e) => setData('nome', e.target.value)}
          className='px-1 text-black'
        />
        </div>
        {errors.nome && <div>{errors.nome}</div>}
      </div>

      <div className=' text-center'>
        <label className=' text-white'>Preço</label>
       <div>
       <input
          type="number"
          value={data.preco}
          onChange={(e) => setData('preco', e.target.value)}
          className='px-1 text-black'
        />
       </div>
        {errors.preco && <div>{errors.preco}</div>}
      </div>

      <div className=' text-center'>
        <label className=' text-white'>Categoria</label>
        
      <div>
      <input
          type="text"
          value={data.categoria}
          onChange={(e) => setData('categoria', e.target.value)}
          className='px-1 text-black'
        />
      </div>
        {errors.categoria && <div>{errors.categoria}</div>}
      </div>

      <div className=' text-center'>
        <label className=' text-white'>Marca</label>
        <div>
        <input
          type="text"
          value={data.marca}
          onChange={(e) => setData('marca', e.target.value)}
          className='px-1 text-black'
        />
        </div>
        {errors.marca && <div>{errors.marca}</div>}
      </div>

      <div className=' text-center'>
        <label className=' text-white'>Imagem</label>
       <div className=' text-center'>
       <input
          type="file"
          name=''
          accept='image/*'
          onChange={(e) => setData('imgs', e.target.files[0])}
          className='px-1 text-white '
        />
       </div>
        {errors.imagem && <div>{errors.imgs}</div>}
      </div>

      <div className='bg-white text-black px-1 py-1 hover:border-2 border-green-500'>
        <button type="submit">Criar Produto</button>
      </div>
    </form>
    </div>
  );
};

export default Create;
