<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::middleware(['auth'])->group(function () {
    Route::get('/user', function () {
        return json_encode(auth()->user());
    });
});

require __DIR__.'/auth.php';
