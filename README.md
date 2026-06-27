## 📝 Project Context & My Contribution

This repository is a practice project from a Frontend Web Development course. A full-stack web application that dynamically fetches and displays a continuously updating random number from a local Node.js backend. The frontend communicates with the server every 1000 milliseconds using the JavaScript Fetch API. The core structure, including the HTML, CSS, and the local Node.js server setup, was provided as a starter template by the course.

**My specific contribution to this project was entirely within the `script.js` file.** My tasks included:
* Implementing the **Fetch API** to establish communication with the backend.
* Handling asynchronous operations and JSON data processing.
* Creating a polling mechanism using `setInterval` to continuously request and update data every 1000ms.
* Dynamically manipulating the DOM to display the real-time data to the user.

```
# Real-Time Random Number Fetcher 🔄

A full-stack web application that dynamically fetches and displays a continuously updating random number from a local Node.js backend. The frontend communicates with the server every 1000 milliseconds using the JavaScript Fetch API.

## 📂 Project Structure

random-number/
├── assets/
│   └── Vazir.ttf
├── server/
│   └── server.js
├── index.html
├── package.json
├── script.js
└── style.css

## 🛠️ Technologies Used

* **Frontend:** HTML, CSS, Vanilla JavaScript (Fetch API, Promises, DOM Manipulation)
* **Backend:** Node.js

## 📡 API Details

The frontend makes a `GET` request to the following local endpoint to retrieve the data:

* **URL:** `http://localhost:3000/random`
* **Response Format (JSON):**
```json
{
  "price": 1396068
}

```
The data is fetched immediately upon loading the page and subsequently refreshed every 1 second.
