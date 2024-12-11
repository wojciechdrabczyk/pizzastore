<?php

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
Route::inertia('/menu', 'Menu')->name('menu');

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
