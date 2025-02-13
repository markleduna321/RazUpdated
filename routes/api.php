<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\OrderInventoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseOrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    

    Route::resource('products', ProductController::class);
    Route::resource('accounts', AccountController::class);
    Route::resource('purchase-orders', PurchaseOrderController::class);
    Route::resource('order-inventory', OrderInventoryController::class);
    // Route::get('/products', [ProductController::class, 'index']);
    // Route::post('/products', [ProductController::class, 'store']);
    // Route::get('/products/{id}', [ProductController::class, 'show']);

    // Route::get('/accounts', [AccountController::class, 'index']);
    // Route::post('/accounts', [AccountController::class, 'store']);
    // Route::get('/accounts/{id}', [AccountController::class, 'show']);
 // Use {product} for route model binding

    // Route::get('/purchase-orders/products', [PurchaseOrderController::class, 'getProducts']);

// });
