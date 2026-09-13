# Women Diversiform

A secure full-stack platform that enables women to report abuse or harassment and access legal and police support.

## 📌 Overview

Women Diversiform provides a centralized platform for reporting incidents and accessing support resources through a web-based application.

The project focuses on providing a structured way to register complaints, track reported issues, and connect users with relevant police and legal support.

## 🎯 Problem Statement

Victims of abuse or harassment may face difficulties when reporting incidents and finding appropriate support.

Women Diversiform aims to provide a digital platform that simplifies complaint registration and helps users access relevant support services.

## 🚀 Features

* User authentication using phone number and OTP verification
* Complaint registration
* Complaint tracking
* Access to police support
* Access to legal support
* Notification system
* Secure handling of user and complaint information

## 🛠️ Technologies Used

### Frontend

* React.js

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

## 🏗️ Application Architecture

```text
User
  │
  ▼
React.js Frontend
  │
  ▼
Node.js + Express.js Backend
  │
  ▼
MongoDB Atlas
```

## 📂 Project Structure

```text
SAFE-HAVEN/
│
├── Servers/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── client/
│
├── README.md
└── package.json
```

## 🔐 Authentication

The application uses phone-number-based authentication with OTP verification.

Authentication-related configuration should be stored using environment variables rather than directly in source code.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Pujitha-sai/SAFE-HAVEN.git
cd SAFE-HAVEN
```

### 2. Install dependencies

Install the frontend dependencies:

```bash
cd client
npm install
```

Install the backend dependencies:

```bash
cd ../Servers
npm install
```

### 3. Configure environment variables

Create the required `.env` files based on the environment variables used by the application.

Do not commit `.env` files or API credentials to GitHub.

### 4. Run the application

Start the backend and frontend using the commands/configuration required by the project.

## 🧩 Key Technical Components

### Complaint Management

Provides functionality for registering and tracking complaints.

### Police & Legal Support

Provides access to relevant police and legal support services.

### Notification System

Provides notifications related to application activities.

### Database

MongoDB Atlas is used for storing application data.

## 🔮 Future Improvements

* Improve automated complaint categorization
* Add advanced complaint analytics
* Improve notification capabilities
* Add additional support resources
* Enhance application accessibility and usability

## 👩‍💻 Author

**Pujitha Sai**

[GitHub](https://github.com/Pujitha-sai)
[LinkedIn](YOUR_LINKEDIN_URL)
