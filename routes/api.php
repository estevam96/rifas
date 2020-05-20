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

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::middleware(['auth:api'])->group(function () {
  Route::get('raffle/avaliable', 'api\RaffleController@valiables');
});

Route::apiResources([
  'raffle' => 'api\RaffleController',
  'orders' => 'api\OrderController'
]);
Route::prefix('users')->middleware(['auth:api'])->group(function () {
  Route::apiResource('/', 'api\UserController');
  Route::get('/me', 'api\UserController@me');
});

Route::apiResource('tickets', 'api\TicketController')->except(['index']);

Route::get('tickets/raffle/{raffleId}', 'api\TicketController@index')->name('tickets.raffle.index');

Route::apiResource('payment', 'api\PaymentController')->except(['show']);

