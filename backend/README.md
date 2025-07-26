# Backend - Ecommerce Forever API

Node.js backend server for the Ecommerce Forever application.

## Features
- User authentication (JWT)
- Product management
- Order processing
- Cart functionality
- Image upload (Cloudinary)
- Payment integration (Stripe, Razorpay)

## Tech Stack
- Node.js & Express
- MongoDB
- JWT Authentication
- Cloudinary (Image Storage)
- Stripe & Razorpay (Payments)

## Setup
1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Start server: `npm start`

## Environment Variables
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `CLOUDINARY_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_SECRET_KEY` - Cloudinary secret key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `RAZORPAY_KEY_ID` - Razorpay key ID
- `RAZORPAY_KEY_SECRET` - Razorpay secret key
- `ADMIN_EMAIL` - Admin email
- `ADMIN_PASSWORD` - Admin password