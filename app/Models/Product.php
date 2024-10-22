<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'expiry_date',
        'stock'
    ];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
