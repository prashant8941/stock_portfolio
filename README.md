# 📈 AI-Powered Stock Portfolio Tracker

An AI-powered full-stack web application that helps users manage their stock investments, track portfolio performance, and receive AI-generated insights and recommendations.

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt

### 📊 Portfolio Management

* Add Stocks
* View Portfolio
* Track Investment Value
* Track Current Value
* Profit/Loss Calculation
* Sector Classification

### 🤖 AI Portfolio Analysis

* Portfolio Summary
* Profit/Loss Analysis
* Risk Assessment
* Diversification Suggestions
* Beginner-Friendly Investment Insights

### 🗄 Database

* User Data Storage
* Portfolio Storage
* Persistent Login Sessions
* MongoDB Atlas Integration

---

## 🏗 Tech Stack

### Frontend

* React.js
* Vite
* React Context API
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB Atlas
* Mongoose

### AI

* OpenRouter API
* LLM-based Portfolio Analysis

---

## 📂 Project Structure

```text
stock-portfolio-ai/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    └── .env
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/prashant8941/stock_portfolio.git
```

```bash
cd stock_portfolio
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key
```

Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start Frontend

```bash
npm run dev
```

---

## 🧠 AI Analysis Workflow

1. User adds stocks to portfolio.
2. Portfolio data is sent to backend.
3. Backend generates a portfolio prompt.
4. OpenRouter AI analyzes portfolio.
5. AI returns:

   * Portfolio Summary
   * Risk Assessment
   * Diversification Suggestions
   * Investment Insights

---

## 📸 Screens

### Authentication

* Register Page
* Login Page

### Dashboard

* Portfolio Overview
* Add Stock Form
* Stock List

### AI Insights

* Portfolio Summary
* Profit/Loss Analysis
* Risk Level
* Diversification Suggestions

---

## 🔒 Security Features

* Password Hashing
* JWT Authentication
* Protected APIs
* Environment Variables
* Secure MongoDB Atlas Connection

---

## 📈 Future Improvements

* Real-Time Stock Prices
* Stock Search API
* Portfolio Charts
* Sector-wise Pie Charts
* Watchlist Feature
* Export Portfolio Reports
* Dark Mode
* Email Alerts

---

## 🎯 Learning Outcomes

* Full Stack Development
* REST API Development
* Authentication & Authorization
* MongoDB Database Design
* AI Integration
* State Management
* API Consumption
* Deployment

---

## 👨‍💻 Author

**Prashant Sharma**

* GitHub: https://github.com/prashant8941
* LinkedIn: [www.linkedin.com/in/prashant-sharma-81675a2bb](http://www.linkedin.com/in/prashant-sharma-81675a2bb)

---

## ⭐ Project Highlights

✔ Full Stack MERN Application
✔ AI-Powered Portfolio Analysis
✔ JWT Authentication
✔ MongoDB Atlas Integration
✔ Responsive User Interface
✔ Production-Ready Architecture
