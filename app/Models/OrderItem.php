<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['purchase_order_id', 'product_id', 'amount', 'price'];

    /**
     * Define the relationship between an OrderItem and a PurchaseOrder.
     * An OrderItem belongs to a PurchaseOrder.
     */
    public function purchaseOrder()
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    /**
     * Define the relationship between an OrderItem and a Product.
     * An OrderItem belongs to a Product.
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
