<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use App\Models\produtos;
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
        ]);

        $produtos = new produtos();
        $produtos->create($validated);
        return redirect('/');
    }
    public function viewCreate()
    {
        return Inertia::render('Produtos/Create');
    }
}
