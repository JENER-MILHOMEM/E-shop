<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class eshop extends Controller
{
    public function view()
    {
        return Inertia::render('eshop/main');
    }
}
