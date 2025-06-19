# 🛒 Ecommerce Forever

A modern, full-stack e-commerce platform with separate frontend, backend, and admin interfaces.

![Node](https://img.shields.io/badge/node-v14+-green.svg)
![React](https://img.shields.io/badge/react-latest-blue.svg)

## 🚀 Project Overview

Ecommerce Forever is a complete online shopping solution featuring:

- 🛍️ **Customer Shopping Experience** - Browse products, add to cart, and checkout
- 🔧 **Admin Dashboard** - Manage products, orders, and users
- 🖥️ **RESTful API** - Powerful backend services

## 🏗️ Architecture

```
Ecommerce-Forever/
├── frontend/    # Customer-facing React application
├── admin/       # Admin control panel (React)
└── backend/     # Node.js API server
```

## 💻 Tech Stack

### Frontend & Admin
- ⚛️ React with Vite
- 🎨 Tailwind CSS
- 📱 Responsive design

### Backend
- 🟢 Node.js & Express
- 🍃 MongoDB
- 🔐 JWT Authentication
- ☁️ Cloudinary (image storage)

## 🔧 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ecommerce-Forever
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install

   # Admin
   cd ../admin
   npm install
   ```

3. **Configure environment**
   - Create `.env` files in each directory
   - Add required environment variables

4. **Start development servers**
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm run dev

   # Admin
   cd ../admin
   npm run dev
   ```

## ✨ Features

- 👤 User authentication & profiles
- 🔍 Product search & filtering
- 🛒 Shopping cart functionality
- 💳 Secure checkout process
- 📊 Admin dashboard
- 📱 Responsive design