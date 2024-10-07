<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PurchaseOrderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Account;
use App\Models\PurchaseOrder;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('login/page');
});
Route::prefix('admin')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });

    Route::prefix('products')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/products/page');
        });
    
        Route::get('/{id}', function ($id) {
            $product = Product::find($id);
    
            if (!$product) {
                return redirect()->route('products.index')->withErrors('Product not found');
            }
    
            return Inertia::render('admin/products/id/page', [
                'product' => $product
            ]);
        });
    });

    Route::prefix('accounts')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/accounts/page');
        });

        Route::get('/{id}', function ($id) {
            $account = Account::find($id);
    
            if (!$account) {
                return redirect()->route('accounts.index')->withErrors('Account not found');
            }
    
            return Inertia::render('admin/accounts/id/page', [
                'account' => $account
            ]);
        });
    });

    Route::prefix('purchase')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/purchase-order/page');
        });
        
        Route::get('/{id}', function ($id) {
            $purchaseOrder = PurchaseOrder::find($id);
    
            if (!$purchaseOrder) {
                return redirect()->route('purchase-order.index')->withErrors('Account not found');
            }
    
            return Inertia::render('admin/purchase-order/id/page', [
                'purchaseOrder' => $purchaseOrder
            ]);
        });
    });
});




// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
