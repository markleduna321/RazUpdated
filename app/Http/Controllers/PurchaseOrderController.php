<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class PurchaseOrderController extends Controller
{
    // Method to store a new purchase order
    public function store(Request $request)
    {
        $request->validate([
            'account_id' => 'required|exists:accounts,id',
            'medRep' => 'required',
            'orderItems' => 'required|array',
            'orderItems.*.product_id' => 'required|exists:products,id',
            'orderItems.*.amount' => 'required|numeric',
            'orderItems.*.price' => 'required|numeric',
        ]);

        $purchaseOrder = PurchaseOrder::create([
            'account_id' => $request->input('account_id'),
            'medRep' => $request->input('medRep'),
            'status' => $request->input('status', 'Pending')
        ]);

        foreach ($request->input('orderItems') as $item) {
            OrderItem::create([
                'purchase_order_id' => $purchaseOrder->id,
                'product_id' => $item['product_id'],
                'amount' => $item['amount'],
                'price' => $item['price']
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Purchase order created successfully',
            'data' => $purchaseOrder->load('orderItems')
        ]);
    }

    // Method to list all purchase orders
    public function index()
    {
        $purchaseOrders = PurchaseOrder::with('orderItems', 'account')->get();
        return response()->json($purchaseOrders);
    }

    // Method to retrieve a single purchase order by ID
    public function show($id)
    {
        $purchaseOrder = PurchaseOrder::with('orderItems', 'orderItems.product', 'account')->findOrFail($id);
        return response()->json($purchaseOrder);
    }

    // Method to update an existing purchase order
    public function update(Request $request, $id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($id);

        // Update the PurchaseOrder fields
        $purchaseOrder->update([
            'account_id' => $request->input('account_id', $purchaseOrder->account_id),
            'medRep' => $request->input('medRep', $purchaseOrder->medRep),
            'status' => $request->input('status', $purchaseOrder->status)
        ]);

        // Clear existing order items and re-add the new ones
        $purchaseOrder->orderItems()->delete();

        foreach ($request->input('orderItems') as $item) {
            OrderItem::create([
                'purchase_order_id' => $purchaseOrder->id,
                'product_id' => $item['product_id'],
                'price' => $item['price']
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Purchase order updated successfully',
            'data' => $purchaseOrder->load('orderItems')
        ]);
    }

    // Method to delete a purchase order
    public function destroy($id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($id);
        $purchaseOrder->orderItems()->delete(); // Delete the related order items first
        $purchaseOrder->delete();

        return response()->json([
            'success' => true,
            'message' => 'Purchase order deleted successfully'
        ]);
    }
}
