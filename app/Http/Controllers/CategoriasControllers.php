<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Produtos; 
class CategoriasControllers extends Controller
{
    public function masculino()
    {

        $produtos = Produtos::where('categoria', 'masculino')->get();
        return Inertia::render('produtos/categorias/masculino', [
            'produtos' => $produtos
        ]);
    }
}
