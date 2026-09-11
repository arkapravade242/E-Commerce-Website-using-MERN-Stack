ARKA'S E-COMMERCE STORE — FULL PROJECT INFORMATION

PROJECT:
ARKA'S E-COMMERCE STORE is a complete full-stack E-Commerce Website developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The project contains three main parts: Frontend customer website, Backend REST API server, and Admin Panel.

CUSTOMER FEATURES:
Home Page, Product Collections, Product Search, Product Filtering, Product Sorting, Product Details, Product Size Selection, Shopping Cart, User Registration, User Login, JWT Authentication, Place Orders, Order History, Order Tracking, Cash on Delivery, Stripe Online Payment, Toast Notifications, Responsive Design.

ADMIN FEATURES:
Admin Login, Add Products, Upload Product Images, Product Category Selection, Product Type Selection, Product Size Selection, Best Seller Selection, View Products, Remove Products, View Customer Orders, Update Order Status, View Payment Method, View Payment Status, View Order Amount, View Customer Address and Order Date.

ORDER STATUS:
Order Placed → Packing → Shipped → Out for Delivery → Delivered

TECHNOLOGIES:
Frontend: React.js, React Router DOM, Tailwind CSS, Axios, React Toastify, Vite.
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Cloudinary, Stripe, CORS, Dotenv.
Admin: React.js, React Router DOM, Tailwind CSS, Axios, React Toastify, Vite.

PROJECT STRUCTURE:
Mern_Ecommerce_Website/
├── admin/
├── backend/
├── frontend/
└── README.md

BACKEND STRUCTURE:
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
└── package.json

FRONTEND STRUCTURE:
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   └── pages/
├── public/
└── package.json

ADMIN STRUCTURE:
admin/
├── src/
│   ├── assets/
│   ├── components/
│   └── pages/
└── package.json

REQUIRED SOFTWARE:
1. Node.js
2. npm
3. Visual Studio Code
4. Git
5. MongoDB
6. Cloudinary Account
7. Stripe Account

HOW TO RUN THE PROJECT:

STEP 1 — OPEN PROJECT:
Open Visual Studio Code and open the Mern_Ecommerce_Website project folder.

STEP 2 — BACKEND:
Open the first VS Code Integrated Terminal and type:

cd backend
npm install
npm run server

Keep this terminal running.

STEP 3 — FRONTEND:
Open a second VS Code Integrated Terminal and type:

cd frontend
npm install
npm run dev

Vite will provide a local URL. Open that URL in the browser.

STEP 4 — ADMIN:
Open a third VS Code Integrated Terminal and type:

cd admin
npm install
npm run dev

Vite will provide a local URL for the Admin Panel.

ALL THREE TERMINALS MUST RUN AT THE SAME TIME:

Terminal 1 → Backend → npm run server
Terminal 2 → Frontend → npm run dev
Terminal 3 → Admin → npm run dev

ENVIRONMENT FILES:
The following files are intentionally not included in GitHub because they contain private configuration and secret keys:

backend/.env
frontend/.env
admin/.env

The person running the project must create these files locally and add their own required configuration.

BACKEND .ENV:
The backend environment file contains private configuration such as MongoDB connection details, JWT secret, Cloudinary credentials, Stripe secret key, Admin credentials, and other backend configuration.

FRONTEND .ENV:
The frontend environment file contains the frontend configuration required to connect the React application to the backend API.

ADMIN .ENV:
The Admin environment file contains the configuration required for the Admin Panel to connect to the backend API.

SECURITY:
Never upload real .env files, passwords, API keys, database credentials, Stripe secret keys, Cloudinary secrets, JWT secrets, or Admin credentials to a public GitHub repository. These values should remain private and should be stored in .env files. If any real secret has already been pushed to GitHub, it should be rotated or revoked.

DATABASE:
MongoDB is used as the main database and Mongoose is used to communicate with MongoDB. The database stores users, products, cart information, orders, addresses, payment information, and other E-Commerce data.

CLOUDINARY:
Cloudinary is used to store product images. The Admin Panel uploads product images, Multer handles uploaded files on the backend, the backend uploads the images to Cloudinary, Cloudinary provides image URLs, and those URLs are stored with the product information.

IMAGE FLOW:
Admin Panel → Image Upload → Multer → Express Backend → Cloudinary → Image URL → MongoDB

PAYMENT:
The project supports Cash on Delivery and Stripe online payment.

CASH ON DELIVERY:
Customers can place an order using Cash on Delivery. The order is stored in MongoDB and can be managed by the Admin Panel.

STRIPE:
Customers can make online payments using Stripe. Stripe configuration and secret credentials are stored in the backend .env file and should never be uploaded to GitHub.

AUTHENTICATION:
The application uses JWT authentication for protected user functionality. During registration, the user's password is hashed using Bcrypt. During login, the backend verifies the credentials and provides a JWT token. The token is then used to access protected features.

AUTHENTICATION FLOW:
User Registration → Password Hashing → MongoDB → User Login → JWT Token → Authenticated User → Protected Features

CUSTOMER SHOPPING FLOW:
User → Home Page → Browse Products → Search/Filter/Sort → Product Details → Select Size → Add to Cart → Cart → Checkout → Cash on Delivery or Stripe → Order → Order History → Order Tracking

ADMIN FLOW:
Admin Login → Admin Panel → Product Management / Order Management

PRODUCT MANAGEMENT:
Admin Login → Add Product → Upload Images → Select Category → Select Type → Select Sizes → Select Best Seller → Save Product → MongoDB

ORDER MANAGEMENT:
Customer Places Order → Order Saved in MongoDB → Admin Views Order → Admin Updates Status → Customer Views Updated Order Status

APPLICATION ARCHITECTURE:
Customer Frontend
        ↓
Express.js Backend API
        ↓
MongoDB

Admin Panel
        ↓
Express.js Backend API
        ↓
MongoDB

Backend
        ├── MongoDB
        ├── Cloudinary
        └── Stripe

MAIN FRONTEND PAGES:
Home
Collection
About
Contact
Product
Cart
Login
Place Order
Orders
Verify Payment

MAIN BACKEND FEATURES:
User Authentication
Product Management
Cart Management
Order Management
Stripe Payment
Payment Verification
Admin Authentication

MAIN ADMIN FEATURES:
Admin Authentication
Add Product
Product List
Remove Product
Order List
Update Order Status

PROJECT HIGHLIGHTS:
MERN Stack E-Commerce Website
React Customer Interface
Separate Admin Panel
Node.js and Express REST API
MongoDB Database
Mongoose
JWT Authentication
Bcrypt Password Hashing
Product Management
Shopping Cart
Search
Filtering
Sorting
Best Sellers
Cloudinary Image Upload
Stripe Payment
Cash on Delivery
Order Management
Order Status Tracking
Responsive UI
Toast Notifications

FUTURE IMPROVEMENTS:
Wishlist System, Product Reviews and Ratings, Coupons and Discounts, Email Notifications, Advanced Admin Dashboard, Sales Analytics, Inventory Management, Real-Time Notifications, Improved User Profile, Advanced Order Tracking, Additional Payment Gateways.

QUICK START:

BACKEND:
cd backend
npm install
npm run server

FRONTEND:
cd frontend
npm install
npm run dev

ADMIN:
cd admin
npm install
npm run dev

IMPORTANT:
Run Backend, Frontend, and Admin Panel in three separate terminals simultaneously.

AUTHOR:
ARKA

PROJECT NAME:
ARKA'S E-COMMERCE STORE

PURPOSE:
This project was developed as a full-stack MERN E-Commerce application for learning, development, portfolio, and demonstration purposes.

GITHUB SECURITY NOTE:
The .env files are intentionally excluded from the repository because they contain private credentials and secret keys. Anyone who clones the project must create their own environment files and use their own MongoDB, Cloudinary, Stripe, JWT, and Admin configuration.
