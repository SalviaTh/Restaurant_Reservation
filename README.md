# Restaurant Reservation System

A full-stack (MERN) web application for making and managing restaurant reservations. It features a clean React frontend using Vite and a robust Express/Node.js backend with MongoDB integration.
# Restaurant Reservation System
Live Site: https://restaurant-reservation-salvia.vercel.app/

## Technologies Used
- **Frontend:** React.js, Vite, Axios, React Hot Toast
- **Backend:** Node.js, Express.js, Mongoose (MongoDB)
- **Deployment:** Vercel (Ready)

---

## Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Set up the Environment Variables
Before running the application, you'll need local environment configurations in both the frontend and backend.

#### Backend
In the `/backend` directory, ensure you have a `config/config.env` (or just `config.env`) file containing:
```env
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<YourUsername>:<YourParsedPassword>@<YourClusterURL>/?appName=Cluster0
```


### 2. Install Dependencies & Run the Backend
Open a terminal inside the project root and navigate to the backend:
```bash
cd backend
npm install
npm run dev
# or npm start
```
*The server will start on port 4000, and you should see "Connected to database!"*

### 3. Install Dependencies & Run the Frontend
Open a **new** terminal inside the project root and navigate to the frontend:
```bash
cd frontend
npm install
npm run dev
```
*Vite will start the dev server, normally accessible at `http://localhost:5173`.*

---