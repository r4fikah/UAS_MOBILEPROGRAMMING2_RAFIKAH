const express = require('express');
const app = express();
const port = 5000; // biar sama kayak yang di home.tsx
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const users = {
  "user1@gmail.com": "password1",
  "user2@gmail.com": "password2",
};

app.use(cors());
app.use(bodyParser.json());

// LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const userPassword = users[email];

  setTimeout(() => {
    if (userPassword === password) {
      return res.status(200).json({
        token: generateSecureRandomString(100),
      });
    }
    res.status(401).json({ message: "Email atau password salah" });
  }, 1000);
});

// === Protected route (buat HomeScreen) ===
app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(' ')[1];
  res.status(200).json({
    message: "Token valid!",
    user: { name: "Rafikah", email: "user1@gmail.com" },
    tokenReceived: token,
  });
});

// === Dummy data Users ===
app.get('/users', (req, res) => {
  const userList = [
    { id: 1, name: "Rafikah", email: "user1@gmail.com", created_at: "2025-10-14" },
    { id: 2, name: "Nadhif", email: "user2@gmail.com", created_at: "2025-10-13" },
    { id: 3, name: "Maulidina", email: "user3@gmail.com", created_at: "2025-10-15" },
  ];
  res.json(userList);
});

// === Dummy data Products ===
app.get('/products', (req, res) => {
  const productList = [
    { id: 1, title: "Laptop ASUS ROG", description: "Laptop gaming keren", price: 15000000, stock: 3, created_at: "2025-10-13" },
    { id: 2, title: "Mouse Logitech G102", description: "Mouse ringan", price: 250000, stock: 10, created_at: "2025-10-13" },
    { id: 2, title: "Samsung S25 Ultra", description: "HP yang cocok buat Fancam", price: 25000000, stock: 5, created_at: "2025-10-15" },
  ];
  res.json(productList);
});

app.listen(port, () => {
  console.log(`✅ Server ready at http://localhost:${port}`);
});

function generateSecureRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}
