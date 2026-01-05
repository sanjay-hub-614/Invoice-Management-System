# Invoice Management System

##  Project Overview
The **Invoice Management System** is a full-stack web application built using **React.js** and **Express.js** that allows users to create, view, update, and delete invoices.  
The project demonstrates core frontend and backend concepts including routing, state management, REST APIs, and database integration using **SQLite**.

---

##  Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- SQLite
- sqlite3

---

##  Features

###  Authentication (Basic)
- Login page
- Signup page

###  Invoice Management
- Create invoices
- View invoice list
- Update invoices
- Delete invoices
- Invoice fields:
  - Invoice Number
  - Client Name
  - Date
  - Amount
  - Status (Paid / Unpaid / Pending)

###  Validation
- Required field validation in invoice form

### 🌐 Routing
- `/` → Login
- `/signup` → Sign Up
- `/home` → Invoice List
- `/add-invoice` → Create Invoice

---

##  Project Structure

### Frontend
src/
├── pages/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Home.jsx
│ └── InvoiceForm.jsx
├── api.js
├── App.jsx
├── main.jsx
└── styles.css
### Backend
backend/
├── server.js
├── database.db
├── package.json

# Backend
cd backend
npm install
node server.js

# Frontend
cd frontend
npm install
npm run dev