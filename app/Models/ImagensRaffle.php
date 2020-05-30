<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImagensRaffle extends Model
{
  public $timestamps = false;
  protected $appends = ['url_image'];
  protected $hidden = [
    'image',
  ];
  public $fillable = [
    'image',
    'raffle_id'
  ];

  public function getUrlImageAttribute()
  {
    return url("/storage/raffles/".$this->raffle_id .'/'. $this->image);
  }
}
