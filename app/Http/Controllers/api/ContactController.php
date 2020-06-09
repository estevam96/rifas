<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class ContactController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    try {;
      if ($title = $request->query('title')) {
        $contacts = Contact::where('type', $title)->first();
      } else {
        $contacts = Contact::all();
      }
      return response()->json($contacts);
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
        'type' => 'required',
        'social' => 'required',
        'contact' => 'required',
      ];

      $validaror = Validator::make($request->all(), $rules);
      if ($validaror->fails()) {
        return Response()->json($validaror->errors(), 400);
      }
      $data = $request->only(['type', 'social', 'contact', 'description', 'isFooter']);

      $contacts = Contact::create($data);
      return response()->json($contacts);
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
      $contacts = Contact::find($id);
      if ($contacts == NULL) {
        return response()->json(['message' => 'Raffle not found'], 404);
      }
      return response()->json($contacts);
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
      $data = $request->only(['type', 'social', 'contact', 'isFooter', 'description']);
      $contacts = Contact::find($id);
      if ($contacts == NULL) {
        return response()->json(['message' => 'Raffle not found'], 404);
      }
      $contacts->fill($data);
      $contacts->save();
      return response()->json($contacts);
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
      $contacts = Contact::find($id);
      if ($contacts == NULL) {
        return response()->json(['message' => 'Raffle not found'], 404);
      }

      $contacts->delete();
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }

  public function footer()
  {
    try {
      $contacts = Contact::where('isFooter', true)->get();
      return response()->json($contacts);
    } catch (BadRequestHttpException $ex) {
      return Response()->json($ex, 400);
    }
  }
}
