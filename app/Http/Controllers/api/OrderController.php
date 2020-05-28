<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Raffle;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class OrderController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    try {
      $perPage = $request->query('perPage', 10);
      $order = Order::with([
        'raffle:id,title',
        'tickets:id,ticket,status,order_id'
      ])->paginate($perPage);
      return Response()->json($order, 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    try {
      $rules = [
        'name' => 'required|string',
        'phone' => 'required',
        'tickets' => 'required|array',
        'raffle_id' => 'required|uuid'
      ];


      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $data = $request->only([
        'name',
        'phone',
        'tickets',
        'raffle_id'
      ]);

      $raffle = Raffle::find($data['raffle_id']);
      if ($raffle == NULL) {
        return Response()->json(['message' => 'Raffle not found'], 401);
      }

      $order = Order::create([
        'name' => $data['name'],
        'phone' => $data['phone'],
        'value_total' => count($data['tickets']) * $raffle['price'],
        'raffle_id' => $data['raffle_id']
      ]);

      foreach ($data['tickets'] as $ticket) {
        Ticket::create([
          'ticket' => $ticket,
          'order_id' => $order->id,
          'raffle_id' => $data['raffle_id']
        ]);
      }

      return Response()->json($order, 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    try {
      $order = Order::select(
        'id',
        'name',
        'phone',
        'status',
        'value_total'
      )->with('tickets:id,ticket,status,order_id')->find($id);
      if ($order == NULL) {
        return Response()->json(['message' => 'Order not found'], 401);
      }
      return Response()->json($order, 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   *
   */
  public function update(Request $request, $id)
  {
    try {
      $rules = [
        'status' => 'required|string',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $order = Order::with('tickets')->find($id);
      if ($order == NULL) {
        return Response()->json(['message' => 'Order not found'], 401);
      }

      $data = $request->only(['status']);

      switch ($data['status']) {
        case 'paid out':
          $order->tickets()->update(['status' => 'paid out']);
          break;
        case 'canceled':
          $order->tickets()->delete();
          break;
        default:
          $order->tickets()->update(['status' => 'reserved']);
          break;
      }
      $order->fill($data);
      $order->save();

      return Response()->json(['message' => 'Order Updated'], 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    try {
      $order = Order::with('tickets')->find($id);
      if ($order == NULL) {
        return Response()->json(['message' => 'Order not found'], 401);
      }

      $order->tickets()->delete();
      $order->delete();

      return Response()->json(['message' => 'Order Deleted'], 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }
}
