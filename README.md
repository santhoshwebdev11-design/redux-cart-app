# 🛒 Redux Cart App

A modern and responsive **Shopping Cart Application** built using **React.js**, **Tailwind CSS**, and **Redux Toolkit**. The app demonstrates cart logic, global state management, and a clean UI suitable for real-world e-commerce applications.

---

## 🚀 Features

* 🛍️ Display product list
* ➕ Add products to cart
* 🗑️ Remove items from cart
* 💰 Automatic total price calculation
* 📦 Global state management using **Redux Toolkit**
* ⚡ Responsive UI with **Tailwind CSS**

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **State Management:** Redux Toolkit

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── CartTile.jsx
│   ├── ProductTile.jsx
│   ├── Cart.jsx
│   └── CartItem.jsx
├── features/
│   ├── store.js
│   └── cartSlice.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/santhoshwebdev11-design/redux-cart-app
```

2. Navigate to the project directory

```bash
cd redux-cart-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

---

## 📌 Redux Toolkit Implementation

* Centralized cart state
* Uses `createSlice` for reducers and actions
* Clean and scalable cart logic

```js
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
     removeFromCart,
   
  },
});
```

---

## 🌐 Live Demo (Vercel)

The application is deployed using **Vercel**.

🔗 **Live URL:** [https://redux-cart-app-blush.vercel.app/](https://redux-cart-app-blush.vercel.app/)

---

## 🌱 Future Improvements

* Backend API integration
* User authentication
* Payment gateway integration
* Persistent cart using LocalStorage
* Product search and filters

---

## 🙌 Author

**Santhosh N**

* GitHub: [https://github.com/santhoshwebdev11-design/redux-cart-app](https://github.com/santhoshwebdev11-design/redux-cart-app)
* LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## ⭐ Support

If you like this project, please ⭐ the repository to support my learning jo
