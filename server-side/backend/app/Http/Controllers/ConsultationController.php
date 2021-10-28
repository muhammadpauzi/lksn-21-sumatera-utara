<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConsultationController extends Controller
{
    public function index()
    {
        $society = DB::table("societies")->where('login_tokens', '=', request()->get('token'))->get();
        $consultations = DB::table("consultations")->where('society_id', '=', $society[0]->id)->get();

        if ($consultations) {
            return response()->json(["consultation" => $consultations]);
        }
    }

    public function store()
    {
        $society = DB::table("societies")->where('login_tokens', '=', request()->get('token'))->get();
        // return response()->json(["consultation" => $consultations]);
        $newConsultation = DB::table("consultations")->insertGetId([
            "status" => "pending",
            "society_id" => $society[0]->id,
            "disease_history" => request()->post("disease_history"),
            "current_symptoms" => request()->post("current_symptoms"),
        ]);

        if ($newConsultation) {
            return response()->json(["message" => "Request consultation sent successfully"]);
        }
    }
}
