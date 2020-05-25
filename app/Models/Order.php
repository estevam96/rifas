<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  public $fillable = [
    'name',
    'phone',
    'status',
    'value_total',
    'raffle_id'
  ];

  public function tickets()
  {
    return $this->hasMany('App\Models\Ticket');
  }

  public function raffle()
  {
    return $this->belongsTo('App\Models\Raffle');
  }
}
