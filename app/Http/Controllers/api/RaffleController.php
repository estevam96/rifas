<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Raffle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class RaffleController extends Controller
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
      $raffle = Raffle::orderBy('created_at', 'asc')
        ->paginate(intval($perPage));
      return Response()->json($raffle, 200);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  /**
   * Display a listing of the resource.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function valiables(Request $request)
  {
    try {
      $perPage = $request->query('perPage', 10);
      $raffle = Raffle::where('status', null)
        ->paginate(intval($perPage));
      return Response()->json($raffle, 200);
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
        'banner' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        'title' => 'required',
        'draw-day' => 'required|date|after:today',
        'tickets' => 'required|numeric',
        'ticket-price' => 'required',
        'description' => '',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $data = $request->only([
        'title',
        'draw-day',
        'tickets',
        'ticket-price',
        'description',
        'banner'
      ]);

      $image = $request->file('banner')->store('raffles', 'public');
      $data['banner'] = $request->banner->hashName();
      $raffle = Raffle::create($data);
      return Response()->json($raffle, 200);
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
      $raffle = Raffle::find($id);
      if ($raffle == NULL) {
        return Response()->json(['message' => 'Raffle not found'], 401);
      }
      return Response()->json($raffle, 200);
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
        'banner' => 'image|mimes:jpeg,png,jpg|max:2048',
        'title' => '',
        'draw-day' => 'date|after:today',
        'ticket-price' => '',
        'description' => '',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }

      $raffle = Raffle::find($id);
      if ($raffle == NULL) {
        return Response()->json(['message' => 'Raffle not found'], 401);
      }

      $data = $request->only([
        'title',
        'draw-day',
        'ticket-price',
        'description',
      ]);

      if ($request->hasFile('banner')) {
        $image = $request->file('banner')->store('raffles', 'public');
        $data['banner'] = $request->banner->hashName();
        Storage::disk('public')->delete('raffles/' . $raffle->banner);
      }

      $raffle->fill($data);
      $raffle->save();
      return Response()->json($raffle, 200);
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
      $raffle = Raffle::find($id);
      if ($raffle == NULL) {
        return Response()->json(['message' => 'Raffle not found'], 401);
      }
      $raffle->delete();
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }
}
