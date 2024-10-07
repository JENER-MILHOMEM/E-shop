<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Produtos; 
class eshop extends Controller
{
    public function view()
    {
        $produtos = Produtos::all();
        return Inertia::render('eshop/main', [
            'produtos' => $produtos
        ]);
    }
    
}
