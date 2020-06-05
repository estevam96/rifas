<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::post('auth', 'AuthController@login');
Route::middleware('apiJWT')->get('/user', function (Request $request) {
  return $request->user();
});


Route::prefix('users')->middleware(['apiJWT'])->group(function () {
  Route::apiResource('/', 'api\UserController');
  Route::get('/me', 'api\UserController@me');
});


Route::get('raffle/last', 'api\RaffleController@lastRaffle');
Route::get('raffle/recent', 'api\RaffleController@recentRaffle');

Route::get('tickets/raffle/{raffleId}', 'api\TicketController@index')->name('tickets.raffle.index');



Route::middleware(['apiJWT'])->group(function () {
  Route::get('raffle/avaliable', 'api\RaffleController@valiables');
  Route::apiResource('orders', 'api\OrderController')->except('store');
  Route::apiResource('raffle', 'api\RaffleController')->except(['index', 'show']);
  Route::apiResource('payment', 'api\PaymentController')->only(['store', 'update', 'destroy']);
  Route::apiResource('tickets', 'api\TicketController')->except(['index']);
});

Route::apiResource('payment', 'api\PaymentController')->except(['store', 'update', 'destroy']);
Route::resource('raffle', 'api\RaffleController')->only(['index', 'show']);
