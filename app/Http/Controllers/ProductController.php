<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'response' => $products
        ], 200); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        // Create a new product
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'expiry_date' => 'required|date',
            'stock' => 'required|numeric',
        ]);

        // Create a new product with the validated data
        $product = Product::create($validatedData);
        return response()->json(['message' => 'Product created successfully', 'product' => $product], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product =  Product::where('id', $id)->first();
        return response()->json([
            'response' => $product
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
