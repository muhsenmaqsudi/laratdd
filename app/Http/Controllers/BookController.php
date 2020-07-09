<?php

namespace App\Http\Controllers;

use App\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function store(StoreBookRequest $request)
    {
        Book::create([
            'title' => $request->title,
            'author' => $request->author
        ]);
    }

    public function update(UpdateBookRequest $request, Book $book)
    {
        $book->update([
            'title' => $request->title,
            'author' => $request->author
        ]);
    }
}
