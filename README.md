# 🏥 NeuroFive Week 2 - Health Records CRUD API

A RESTful Health Records API built with **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates complete CRUD (Create, Read, Update, Delete) operations with persistent database storage using MongoDB and Mongoose.

---

## 📌 Features

- Create a new health record
- Retrieve all health records
- Retrieve a health record by ID
- Update an existing health record
- Delete a health record
- MongoDB database integration
- Environment variable configuration using dotenv
- Centralized error handling
- Persistent data storage

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- CORS
- Nodemon
- Postman (API Testing)

---

## 📁 Project Structure

```
neurofive-week2-health-api/
│
├── config/
│   └── db.js
├── controllers/
│   └── healthController.js
├── middleware/
│   └── errorMiddleware.js
├── models/
│   └── HealthRecord.js
├── routes/
│   └── healthRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/neurofive-week2-health-api.git
```

### 2. Navigate to the project

```bash
cd neurofive-week2-health-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/neurofive_health_db
```

> If using MongoDB Atlas, replace the connection string with your Atlas URI.

---

## ▶️ Run the Application

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Server runs at

```
http://localhost:5000
```

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | API status |
| POST | `/api/health` | Create a health record |
| GET | `/api/health` | Get all health records |
| GET | `/api/health/:id` | Get a record by ID |
| PUT | `/api/health/:id` | Update a record |
| DELETE | `/api/health/:id` | Delete a record |

---

## 📦 Sample Request

### POST `/api/health`

```json
{
  "patientName": "Ali Khan",
  "age": 25,
  "condition": "Fever",
  "status": "Stable"
}
```

---

## ✅ Sample Response

```json
{
  "success": true,
  "message": "Health record created successfully",
  "data": {
    "_id": "...",
    "patientName": "Ali Khan",
    "age": 25,
    "condition": "Fever",
    "status": "Stable"
  }
}
```

---

## 🧪 Testing

The API was tested using **Postman** for all CRUD operations:

- Create Record
- Get All Records
- Get Record by ID
- Update Record
- Delete Record

---

## 💾 Database

This project uses **MongoDB** with **Mongoose** for data persistence.

Data remains available even after restarting the server, demonstrating persistent database storage.

---

## 🔒 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Never commit your `.env` file to GitHub.

---

## 👨‍💻 Author

**Suhail Ahmed**

- GitHub: https://github.com/Suhail-Ahmed7
- LinkedIn: https://linkedin.com/in/suhail-ahmed7

---

## 📄 License

This project was developed as part of the **NeuroFive Backend Development Internship – Week 2 Task**.
