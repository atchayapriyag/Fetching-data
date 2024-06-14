const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, this is your data!' });
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});