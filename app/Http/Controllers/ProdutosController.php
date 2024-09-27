<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produtos; // Certifique-se que o nome do modelo está correto
use Inertia\Inertia;

class ProdutosController extends Controller
{
    public function create()
    {
        // Validação dos dados
        $validated = request()->validate([
            'nome' => 'required',
            'preco' => 'required',
            'categoria' => 'required',
            'marca' => 'required',
        ]);

        // Criação do produto usando o método create diretamente
        Produtos::create($validated);

        return redirect('/');
    }

    public function viewCreate()
    {
        return Inertia::render('Produtos/Create');
    }
}
