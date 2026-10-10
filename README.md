Arka's E-Commerce Website:

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project features a responsive customer shopping website and a separate admin panel for product and order management.

Overview:

Arka's E-Commerce Website provides an online shopping experience where customers can browse products, search and filter collections, select sizes, manage shopping carts, place orders, and view order history. The administrative panel enables administrators to add products, upload product images, manage product listings, and update order statuses.

Features:

Customer Website:

* Responsive user interface for desktop and mobile devices.
* User registration and login with JWT authentication.
* Product browsing by category and subcategory.
* Product search, filtering, and price sorting.
* Product details, images, and size selection.
* Shopping cart management with quantity updates.
* Automatic subtotal, delivery fee, and total calculations.
* Checkout with delivery address collection.
* Cash on Delivery and online payment workflows.
* Order placement and order history.
* Notifications using React Toastify.

Admin Panel:

* Administrator login and protected operations.
* Add new products with multiple images.
* Upload and host product images using Cloudinary.
* View and remove products.
* View customer orders.
* Update order statuses.

Backend and Security:

* RESTful APIs using Node.js and Express.js.
* MongoDB database integration using Mongoose.
* JWT-based authentication and protected routes.
* Password hashing using bcrypt.
* Email validation using Validator.
* Middleware for authentication and request processing.
* Environment variables for sensitive configuration.

Technology Stack

| Category          | Technologies                               |
| ----------------- | ------------------------------------------ |
| Frontend          | HTML5, CSS3, JavaScript (ES6+), React.js   |
| UI and Styling    | Tailwind CSS, React Toastify               |
| React Features    | React Hooks, Context API, React Router DOM |
| Backend           | Node.js, Express.js                        |
| Database          | MongoDB, Mongoose                          |
| Authentication    | JWT, bcrypt, Validator                     |
| API Communication | Axios, RESTful APIs                        |
| Image Management  | Cloudinary, Multer                         |
| Payments          | Stripe, Razorpay, Cash on Delivery         |
| Development Tools | Vite, npm, Postman                         |
| Configuration     | Environment variables                      |

Project Structure:


Arka-Ecommerce-Website/
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md


Note: The structure above is a representative layout. Adjust directory names and filenames to match your actual repository.

Prerequisites:

Install the following before running the application:

* [Node.js](https://nodejs.org/) and npm
* [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas database
* A [Cloudinary](https://cloudinary.com/) account for image hosting
* Postman for API testing
* Stripe and/or Razorpay credentials if configuring online payments

Installation and Setup

1. Clone the Repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>


Replace the placeholders with your actual GitHub repository URL and project directory.

2. Configure the Backend

cd backend
npm install


Create a .env file inside the backend directory and configure the following variables:


PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key


Use the exact environment variable names expected by your backend code. Configure additional payment variables if required by your Razorpay implementation.

Start the backend:
npm run server


If your project uses a different script, check the scripts section in backend/package.json.

The backend runs on http://localhost:4000 by default.

3. Configure the Customer Frontend

Open a new terminal:

cd frontend
npm install


Create a .env file in the frontend directory:


VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id


Start the frontend:
npm run dev


Open the local URL displayed by Vite in your terminal.

4. Configure the Admin Panel

Open another terminal:

bash
cd admin
npm install


Create the appropriate frontend environment file if required by your admin application. Configure its backend URL using the environment variable referenced in the admin code.

Start the admin panel:


npm run dev


Open the local URL displayed by Vite. If the customer frontend and admin panel use the same default port, Vite will select another available port or display a port-conflict message.

API Endpoints

The backend groups its APIs into four main modules.

| Module  | Base Path      | Purpose                                                               |
| ------- | -------------- | --------------------------------------------------------------------- |
| User    | `/api/user`    | Registration, login, and administrator login                          |
| Product | `/api/product` | Product listing, details, creation, and removal                       |
| Cart    | `/api/cart`    | Retrieve, add, and update cart items                                  |
| Order   | `/api/order`   | Order placement, payment workflows, order history, and status updates |

Examples of endpoints defined in the backend include:

* `POST /api/user/register` — Register a customer.
* `POST /api/user/login` — Authenticate a customer.
* `POST /api/user/admin` — Authenticate an administrator.
* `GET /api/product/list` — Retrieve product listings.
* `POST /api/product/single` — Retrieve an individual product.
* `POST /api/product/add` — Add a product (admin access required).
* `POST /api/product/remove` — Remove a product (admin access required).
* `POST /api/cart/get` — Retrieve cart data.
* `POST /api/cart/add` — Add an item to the cart.
* `POST /api/cart/update` — Update cart quantities.
* `POST /api/order/place` — Place a Cash on Delivery order.
* `POST /api/order/stripe` — Initiate a Stripe checkout.
* `POST /api/order/userorders` — Retrieve a customer's orders.
* `POST /api/order/list` — Retrieve orders for administration.
* `POST /api/order/status` — Update an order status.

All endpoints should be used with the HTTP methods and authentication requirements defined in the actual route files.

Database Models

The application uses MongoDB collections managed through Mongoose models.

* User: Stores customer information, email, hashed password, and cart data.
* Product: Stores product names, descriptions, prices, image URLs, categories, subcategories, sizes, and bestseller information.
Order: Stores customer references, purchased items, total amount, delivery address, order status, payment method, payment status, and order date.

Testing

Use Postman to test the backend APIs and verify:

* Customer registration and login.
* Authentication and protected endpoints.
* Product listing and administration.
* Cart operations and quantity updates.
* Order creation and order-history retrieval.
* Payment initiation and server-side payment verification.

Security Notes

* Never commit `.env` files, passwords, API secrets, or private keys to GitHub.
* Use `.env.example` with placeholder values to document required configuration.
* Verify online payment status on the server using trusted provider APIs or signed webhooks.
* Validate uploaded files and restrict their sizes and formats.
* Apply appropriate authorization checks to administrative endpoints.
* Use secure token handling and appropriate token expiration.

Important: The online payment workflows require complete server-side verification and testing before production use. In particular, Stripe payment status should not be trusted solely from a frontend success parameter, and Razorpay server-side initialization and signature verification must be configured correctly.

Future Enhancements

* Improve payment verification and error handling.
* Add automated backend and frontend tests.
* Implement product pagination and advanced filtering.
* Add password recovery and email notifications.
* Improve inventory management and stock validation.
* Deploy the frontend, admin panel, and backend to cloud hosting.
* Add order tracking and enhanced customer account management.

Learning Outcomes:

This project provides practical experience in full-stack web development, React component design, state management, REST API development, MongoDB data modeling, authentication, image upload integration, payment workflows, API testing, and modular application architecture.

Author: Arka

Full-Stack Web Development Project

---

Built with the MERN stack to demonstrate practical full-stack development skills and e-commerce application functionality.
