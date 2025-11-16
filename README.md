# Campus Buzz

This is a dynamic event management website for a university campus.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your_username/campus-buzz.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd campus-buzz
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

This project consists of two parts: a frontend development server and a backend mock server. You'll need to run both concurrently in separate terminal windows.

**1. Running the Backend Server**

The backend is a simple `json-server` that mimics a real database.

*   In your terminal, run the following command to start the server:
    ```sh
    npx json-server --watch db.json --port 3001
    ```
*   The server will be running at `http://localhost:3001`.

**2. Running the Frontend Server**

The frontend is a React application built with Vite.

*   In a new terminal window, run the following command to start the server:
    ```sh
    npm run dev
    ```
*   The application will be running at `http://localhost:5173`.

## Features

*   **User Registration:** New users can register for an account.
*   **Event Calendar:** View all upcoming campus events in a dynamic calendar.
*   **Event Registration:** Register for events directly from the event detail page.
*   **Profile Page:** View your profile and upload a profile picture.
