<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos; 
use Inertia\Inertia;

class ProdutosController extends Controller
{
    public function create()
    {
        $validated = request()->validate([
            'nome' => 'required',
            'preco' => 'required',
            'categoria' => 'required',
            'marca' => 'required',
            'imgs' => 'image|nullable|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'estoque' => 'required',
        ]);
    
        // Verifica se o arquivo de imagem foi enviado
        if (request()->hasFile('imgs')) {
            // Armazena a imagem no diretório 'public/produtos'
            $path = request()->file('imgs')->store('produtos', 'public');
    
            // Adiciona o caminho da imagem nos dados validados
            $validated['imgs'] = $path;
        }
    
        // Cria o produto no banco de dados
        Produtos::create($validated);
    
        return redirect('/');
    }

    public function viewCreate()
    {

        return Inertia::render('produtos/criarProdutos');
    }
    
}
