# 🎬 Movie Ticket Booking App

A modern full-stack Movie Ticket Booking Application that enables users to browse movies, select show timings, choose seats, and book tickets online. The application provides a seamless booking experience with secure authentication, responsive design, and efficient booking management.

---

## 📖 Overview

The Movie Ticket Booking App is designed to simplify the movie ticket reservation process. Users can view available movies, select their preferred showtime, book seats, and manage their bookings. Administrators can manage movies, schedules, and monitor bookings through a dedicated dashboard.

---

## ✨ Features

### 👤 User Features
- User Registration and Login
- JWT-Based Authentication
- Browse Available Movies
- View Movie Details
- Select Show Timings
- Seat Selection
- Ticket Booking
- View Booking History
- Responsive UI for Mobile and Desktop

### 🔑 Admin Features
- Admin Authentication
- Add New Movies
- Update Movie Information
- Delete Movies
- Manage Show Timings
- View All Bookings
- Manage Users

---

## 🏗️ System Architecture

```text
Frontend (React.js)
       │
       ▼
REST APIs (Express.js)
       │
       ▼
MongoDB Database
```

The application follows a client-server architecture:

- Frontend handles user interaction and UI rendering.
- Backend exposes RESTful APIs for authentication, movie management, and booking operations.
- MongoDB stores users, movies, and booking information.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT (JSON Web Tokens)
- bcrypt.js

### Development Tools
- Git
- GitHub
- Postman

---
