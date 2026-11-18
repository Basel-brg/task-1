import { createUser, getUsers, getUserById } from './users.js';
import {
  createTask,
  getTasks,
  getTasksByUser,
  completeTask,
  deleteTask,
} from './tasks.js';

console.log('=== Backend Tasks (ESM + In-Memory) ===\n');

// 1. Create users
const alice = createUser('Alice', 'alice@example.com');
const bob = createUser('Bob', 'bob@example.com');

console.log('Users created:');
console.table(getUsers().map(({ id, name, email }) => ({ id, name, email })));

// 2. Create tasks
const task1 = createTask('Set up Node.js ESM project', alice.id);
const task2 = createTask('Implement Users & Tasks modules', alice.id);
const task3 = createTask('Write README and push to GitHub', bob.id);

console.log('\nAll tasks after creation:');
console.table(
  getTasks().map(({ id, title, completed, userId }) => ({
    id,
    title,
    completed,
    assignee: getUserById(userId)?.name,
  }))
);

// 3. Complete a task
completeTask(task1.id);
console.log(`\nMarked task #${task1.id} ("${task1.title}") as completed.`);

// 4. Filter tasks by user
console.log(`\nTasks assigned to ${alice.name}:`);
console.table(
  getTasksByUser(alice.id).map(({ id, title, completed }) => ({
    id,
    title,
    completed,
  }))
);

// 5. Delete a task
const deleted = deleteTask(task2.id);
console.log(`\nDeleted task #${task2.id}: ${deleted}`);

console.log('\nFinal tasks list:');
console.table(
  getTasks().map(({ id, title, completed, userId }) => ({
    id,
    title,
    completed,
    assignee: getUserById(userId)?.name,
  }))
);
