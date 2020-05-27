<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class PaymentController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    try {
      $order = Payment::all();
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
        'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        'bank' => 'required',
        'holder' => 'required',
        'agency' => 'required|numeric',
        'account' => 'required',
        'type' => 'required',
        'description' => '',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $data = $request->only([
        'image',
        'bank',
        'holder',
        'agency',
        'account',
        'type',
        'description'
      ]);

      $image = $request->file('image')->store('bank', 'public');
      $data['image'] = $request->image->hashName();
      $payment = Payment::create($data);
      return Response()->json($payment, 200);
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
   */
  public function update(Request $request, $id)
  {
    try {
      $rules = [
        'image' => 'image|mimes:jpeg,png,jpg|max:2048',
        'bank' => '',
        'holder' => '',
        'agency' => 'numeric',
        'account' => '',
        'type' => '',
        'description' => '',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $payment = Payment::find($id);
      if ($payment == NULL) {
        return Response()->json(['message' => 'Payment not found'], 401);
      }

      $data = $request->only([
        'bank',
        'holder',
        'agency',
        'account',
        'type',
        'description'
      ]);

      if ($request->hasFile('image')) {
        $image = $request->file('image')->store('bank', 'public');
        $data['image'] = $request->image->hashName();
        Storage::disk('public')->delete('bank/' . $payment->image);
      }

      $payment->fill($data);
      $payment->save();
      return Response()->json($payment, 200);
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
      $payment = Payment::find($id);
      if ($payment == NULL) {
        return Response()->json(['message' => 'Payment not found'], 401);
      }
      Storage::disk('public')->delete('bank/' . $payment->image);
      $payment->delete();
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }
}
