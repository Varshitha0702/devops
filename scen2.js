const express = require('express');
const app = express();

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 450 },
    { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 399 }
];

let nextId = 3;

// GET /books - Fetch all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author, price } = req.body;

    // Validate input
    if (!title || !author || typeof price !== "number") {
        return res.status(400).json({
            message: "Title, author and price (number) are required"
        });
    }

    const newBook = {
        id: nextId++,
        title,
        author,
        price
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT /books/:id - Update book
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author, price } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (price !== undefined) book.price = price;

    res.status(200).json(book);
});

// DELETE /books/:id - Delete book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(index, 1);

    res.status(200).json({ message: "Book deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
