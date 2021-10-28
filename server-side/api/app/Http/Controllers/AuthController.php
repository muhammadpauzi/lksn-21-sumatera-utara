<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $society = DB::table("societies")
            ->rightJoin("regionals", "regionals.id", "=", "societies.regional_id")
            ->where("societies.id_card_number", "=", $request->post("id_card_number"))
            ->get();
        // jangan lupa login_token
        if ($society) {
            if ($society[0]->password == $request->post('password')) {
                $token = md5($society[0]->id_card_number);
                $society[0]->login_tokens = $token;
                $society[0]->token = $token;
                DB::table("societies")->where("id_card_number", "=", $request->post("id_card_number"))->update(["login_tokens" => $token]);
                return response()->json($society);
            }
        }

        return response()->json(["message" => "ID Card Number or Password incorrect"], 401);
    }

    public function logout(Request $request)
    {
        if (request()->get('token')) {
            return response()->json(["message" => "Logout success"]);
        } else {
            return response()->json(["message" => "Invalid token"], 401);
        }
    }
}
