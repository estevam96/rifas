<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($raffle_id)
    {
        try {
            $tiket = Ticket::where('raffle_id', $raffle_id)
                ->orderBy('ticket')
                ->get();
            return Response()->json($tiket, 200);
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
            $ticket = Ticket::with(['raffle', 'order'])->find($id);
            if ($ticket == NULL) {
                return Response()->json(['message' => 'Ticket not found'], 401);
            }
            return Response()->json($ticket, 200);
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
                'status' => 'required',
            ];

            $validaror = Validator::make($request->all(), $rules);
            if ($validaror->fails()) {
                return Response()->json($validaror->errors(), 400);
            }

            $tiket = Ticket::find($id);
            if ($tiket == NULL) {
                return Response()->json(['message' => 'Ticket not found'], 401);
            }

            $data = $request->only([
                'status',
            ]);

            $tiket->fill($data);
            $tiket->save();
            return Response()->json($tiket, 200);
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
            $tiket = Ticket::find($id);
            if ($tiket == NULL) {
                return Response()->json(['message' => 'Ticket not found'], 401);
            }
            $tiket->delete();
        } catch (BadRequestHttpException $ex) {
            return Response()->json($ex, 400);
        }
    }
}
