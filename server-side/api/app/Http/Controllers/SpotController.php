<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SpotController extends Controller
{
    public function index()
    {
        $spots = DB::table("spots")->get();
        return response()->json(['spots' => $spots]);
    }

    public function show($id)
    {
        $spot = DB::table("spots")->find($id);
        return response()->json([
            'date' => date("F j, Y"),
            'spot' => $spot,
            'vaccinations_count' => $spot->capacity - $spot->serve
        ]);
    }
}
