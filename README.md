# Code Editor Application

## Description

This application is a simple web-based code editor with the following features:

- A description block for task information.
- A code editor component for writing code.
- A dropdown menu for selecting the programming language.
- A button to execute the code.
- A block to display the output or errors returned by the server.

The app is responsive and adjusts its layout to look good on both desktop and mobile screens.

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Steps to Install and Run the Project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open the application in your browser:
   Navigate to `http://localhost:5173`.

### Run the Mock Server

The application uses a mock server implemented with MirageJS. The mock server starts automatically when the app runs.

## About the Mock Server

The mock server intercepts requests made by the app and provides pre-defined responses to simulate server behavior. It is implemented using MirageJS and resides in the `server.ts` file.

### Mock Server Features:

- Intercepts POST requests to `/api/execute`.
- Simulates code execution by returning mock outputs based on the provided language and code.
- Provides responses for different scenarios, including successful execution and errors.
- Returns an error response only when the submitted code contains the word "error"

### How It Works:

- The mock server is initialized during app startup.
- The `/api/execute` endpoint processes the payload (language and code) and returns a mock result, such as:
  - "Code executed successfully" for valid requests.
  - "Syntax Error" or other messages for simulated failures.
