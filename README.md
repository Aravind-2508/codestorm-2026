# CodeStorm 2024 Website

Premium Hackathon Landing Page with Registration System.

## Project Setup

### 1. Prerequisites
- Node.js installed
- MySQL Server installed and running locally
- Git

### 2. Configuration
1.  Open `.env` in the root directory.
2.  Update `DB_USER` and `DB_PASSWORD` with your MySQL credentials.
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=codestorm_db
    PORT=3000
    ```

### 3. Installation
Install dependencies for both frontend and backend:
```bash
npm install
```

## Running the Project

You need to run the **Backend** and **Frontend** in separate terminals.

### Step 1: Initialize Database (One-time)
Creates the database and tables.
```bash
node server/db-init.js
```

### Step 2: Start Backend Server
Handles API requests and database connection.
```bash
node server/index.js
```
*Server will run at http://localhost:3000*

### Step 3: Start Frontend
Launches the React application.
```bash
npm run dev
```
*App will run at http://localhost:5173*

## Troubleshooting (Windows)

If you see an error like `running scripts is disabled on this system`, try running the command using `cmd`:

```bash
cmd /c "npm run dev"
```

Or run this command in PowerShell to allow scripts for the current session:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## Setup & Verification

### Viewing Registered Teams
To check who has registered, run this script:
```bash
node server/view-teams.js
```
