<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VaccinationController extends Controller
{
    public function index()
    {
        $vaccinations = DB::table("vaccinations")->get();
        return response()->json(["vaccinations" => $vaccinations]);
    }
}
