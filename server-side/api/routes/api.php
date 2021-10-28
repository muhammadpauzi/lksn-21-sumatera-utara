<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\SpotController;
use App\Http\Controllers\vaccinationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/v1/auth/login', [AuthController::class, 'login']);
Route::post('/v1/auth/logout', [AuthController::class, 'logout']);
Route::get('/v1/consultations', [ConsultationController::class, 'index'])->middleware("check_token");
Route::post('/v1/consultations', [ConsultationController::class, 'store'])->middleware("check_token");

Route::get('/v1/spots', [SpotController::class, 'index'])->middleware("check_token");
Route::get('/v1/spots/{id}', [SpotController::class, 'show'])->middleware("check_token");

Route::get('/v1/vaccinations', [VaccinationController::class, 'index'])->middleware("check_token");
