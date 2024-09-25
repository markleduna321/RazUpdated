<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
        Route::get('/{id}', function () {
            return Inertia::render('admin/products/id/page');
        });
    });

    Route::prefix('accounts')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/accounts/page');
        });
        Route::get('/{id}', function () {
            return Inertia::render('admin/accounts/id/page');
        });
    });

    Route::prefix('purchase')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/purchase-order/page');
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
