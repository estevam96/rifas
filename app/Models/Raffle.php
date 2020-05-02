<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Env;
use Ramsey\Uuid\Uuid;

class Raffle extends Model
{
    use SoftDeletes;
    protected $primaryKey = 'id';
    protected $KeyType = 'string';
    protected $appends = ['url_banner'];
    public $incrementing = false;

    public $fillable = [
        'banner',
        'title',
        'draw-day',
        'tickets',
        'ticket-price',
        'description',
    ];

    protected static function Boot()
    {
        parent::boot();
        static::creating(function (Model $model) {
            $model->setAttribute($model->getKeyName(), Uuid::uuid4());
        });
    }

    public function getUrlBannerAttribute()
    {
        return url('/storage/raffles/' . $this->banner);
    }
}
