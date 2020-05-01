<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Raffle extends Model
{
    protected $primaryKey = 'id';
    protected $KeyType = 'string';
    public $incrementing = false;

    protected static function Boot()
    {
        parent::boot();
        static::creating(function (Model $model) {
            $model->setAttribute($model->getKeyName(), Uuid::uuid4());
        });
    }
}
