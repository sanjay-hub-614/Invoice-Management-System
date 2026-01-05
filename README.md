<img width="832" height="510" alt="Screenshot 2026-01-05 114458" src="https://github.com/user-attachments/assets/a762e0d0-a76d-4f16-8d81-c33e1cc25f29" />
<img width="1554" height="789" alt="Screenshot 2026-01-05 114434" src="https://github.com/user-attachments/assets/c3845c34-2587-4f1d-995a-a71cbb1fe27c" />
<img width="1540" height="852" alt="Screenshot 2026-01-05 114317" src="https://github.com/user-attachments/assets/00c593dd-0d3f-41db-8b58-827a1f468364" />
<img width="1464" height="902" alt="Screenshot 2026-01-05 114242" src="https://github.com/user-attachments/assets/f8b82cd0-7546-45b3-8a5b-058b27ecc430" />
<img width="1615" height="710" alt="Screenshot 2026-01-05 114214" src="https://github.com/user-attachments/assets/436e0883-de32-4578-a2fc-19a207f27371" />
<img width="1601" height="823" alt="Screenshot 2026-01-05 114104" src="https://github.com/user-attachments/assets/e47c57ef-d2af-4199-8b2f-d30b7b51e3a4" />
<img width="1604" height="747" alt="Screenshot 2026-01-05 114047" src="https://github.com/user-attachments/assets/d5966a99-d441-4dab-8fc3-d98b413072a3" />
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


---

## ⚡ API Endpoints

| Method | Endpoint          | Description       |
|--------|-----------------|-----------------|
| POST   | /invoices        | Create invoice   |
| GET    | /invoices        | Fetch all invoices |
| PUT    | /invoices/:id    | Update invoice by ID |
| DELETE | /invoices/:id    | Delete invoice by ID |

---


