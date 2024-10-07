<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;

    protected $fillable = ['account_id', 'medRep', 'status'];

    /**
     * Define the relationship between a PurchaseOrder and OrderItems.
     * One PurchaseOrder has many OrderItems.
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Define the relationship between a PurchaseOrder and an Account.
     * One PurchaseOrder belongs to one Account.
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
