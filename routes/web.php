
<?php

use App\Http\Controllers\FoodController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Static Pages
Route::inertia('/', 'Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
])->name('home');

Route::inertia('/dashboard', 'Dashboard')->middleware(['auth', 'verified'])->name('dashboard');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/about', 'About')->name('about');
Route::get('/menu', [FoodController::class, 'index'])->name('menu');

Route::inertia('/food', 'Food/Index')->name('food');

// Authenticated Profile Routes
Route::middleware('auth')->group(function () {
    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');

    });
});
// Include auth routes
require __DIR__ . '/auth.php';
