<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Ticket extends Model
{
    protected $primaryKey = 'id';
    protected $KeyType = 'string';
    public $incrementing = false;
    public $timestamps = false;

    public $fillable = [
        'ticket',
        'order_id',
        'raffle_id'
    ];

    protected static function Boot()
    {
        parent::boot();
        static::creating(function (Model $model) {
            $model->setAttribute($model->getKeyName(), Uuid::uuid4());
        });
    }

    public function Raffle()
    {
        return $this->belongsTo('App\Models\Raffle');
    }

    public function order()
    {
        return $this->belongsTo('App\Models\Order');
    }
}
