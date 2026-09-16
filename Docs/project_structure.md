# Project Structure

stitches-client/
│
├── public/
│
├── src/
│   ├── assets/                 ← images, fonts, icons
│   │
│   ├── components/             ← reusable client UI
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ChatBox.jsx
│   │
│   ├── pages/                  ← client pages/routes
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   └── CustomOrder.jsx
│   │
│   ├── auth/                   ← customer authentication
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ForgotPassword.jsx
│   │
│   ├── context/                ← client global state
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── hooks/                  ← custom React hooks
│   │   └── useAuth.js
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── services/               ← Flask API calls
│   │   ├── authService.js
│   │   └── productService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env                        ← Flask API URL
├── index.html
└── package.json