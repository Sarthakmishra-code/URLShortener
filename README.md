# Simple URL Shortener

A simple URL shortener web app where users can paste a long URL and get a shorter version instantly.
The shortened URL is generated using **nanoid** and stored in **MongoDB**. When someone visits the short link, the backend redirects them to the original URL.

The project keeps the frontend minimal and focuses mainly on backend logic.

## Features

* Enter a long URL and generate a short one
* Unique short IDs generated using nanoid
* Store original and short URL in MongoDB
* Redirect to the original URL when the short link is opened
* Minimal UI built with React and Tailwind

## Tech Stack

Frontend

* React
* Tailwind CSS

Backend

* Node.js
* Express

Database

* MongoDB

Other

* nanoid (for generating short IDs)

## How It Works

1. User enters a long URL in the input field.
2. A request is sent to the backend.
3. Backend generates a short ID using **nanoid**.
4. The original URL and short ID are saved in MongoDB.
5. A short URL is returned to the user.
6. When someone opens the short URL, the server finds the original URL and redirects to it.

## Installation

Clone the repository

```
git clone <your-repo-link>
cd url-shortener
```

Install backend dependencies

```
cd backend
npm install
```

Install frontend dependencies

```
cd ../frontend
npm install
```

Create `.env` file in backend

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run backend

```
npm run dev
```

Run frontend

```
npm run dev
```

## Future Improvements

* Copy short URL button
* URL validation
* Click analytics
* Custom short URLs
* User authentication

This project is built mainly for learning backend routing, database storage, and simple URL redirection with a minimal React frontend.
