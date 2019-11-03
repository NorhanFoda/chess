<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Random;

class RandomController extends Controller
{
    public function index(Request $request){
        Random::where('random_value', $request->fen)->get();
    }
}
