const express = require('express');
const app = express();

const PORT = 3000;

// Middleware - Log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Sample student data
const students = [
    { id: 1, name: "Varshitha", age: 20, course: "CSE" },
    { id: 2, name: "Rahul", age: 21, course: "ECE" },
    { id: 3, name: "Sneha", age: 19, course: "IT" }
];

// Route 1: Home
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Student Information Management System" });
});

// Route 2: Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Route 3: Get student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({
            error: "Student not found"
        });
    }

    res.json(student);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
