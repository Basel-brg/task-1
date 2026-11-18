# Backend Tasks (Node.js ESM)

A lightweight Node.js project using **ECMAScript Modules (ESM)** that organizes **Users** and **Tasks** into separate modules with in-memory data storage.

## Project Structure

```text
.
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── index.js      # Entry point demonstrating user and task operations
│   ├── tasks.js      # Tasks module (in-memory CRUD operations)
│   └── users.js      # Users module (in-memory storage & lookup)
└── test/
    └── app.test.js   # Unit tests using Node's built-in test runner
```

## Features

- **ESM Modules** (`"type": "module"` in `package.json`)
- **Users Module (`src/users.js`)**:
  - `createUser(name, email)` — Create a user with auto-incrementing ID
  - `getUsers()` — List all users
  - `getUserById(id)` — Find a user by ID
- **Tasks Module (`src/tasks.js`)**:
  - `createTask(title, userId)` — Create a task linked to an existing user
  - `getTasks()` — List all tasks
  - `getTasksByUser(userId)` — Filter tasks by user ID
  - `completeTask(taskId)` — Mark a task as completed
  - `deleteTask(taskId)` — Remove a task by ID

## Requirements

- Node.js v18+ (tested with Node.js v22)

## Usage

Run the demo script:

```bash
npm start
```

Run in watch mode during development:

```bash
npm run dev
```

Run unit tests:

```bash
npm test
```
