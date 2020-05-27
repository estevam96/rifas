<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
  protected $appends = ['url_image'];

  protected $hidden = [
    'image',
  ];

  public $fillable = [
    'image',
    'bank',
    'holder',
    'agency',
    'account',
    'description',
    'type'
  ];

  public function getUrlImageAttribute()
  {
    return url('/storage/bank/' . $this->image);
  }
}
