import { getUserById } from './users.js';

const tasks = [];
let nextTaskId = 1;

/**
 * Create a new task assigned to an existing user.
 * @param {string} title
 * @param {number} userId
 * @returns {{ id: number, title: string, completed: boolean, userId: number, createdAt: string }}
 */
export function createTask(title, userId) {
  if (!title || !title.trim()) {
    throw new Error('Task title is required.');
  }

  const user = getUserById(userId);
  if (!user) {
    throw new Error(`User with ID ${userId} does not exist.`);
  }

  const task = {
    id: nextTaskId++,
    title: title.trim(),
    completed: false,
    userId,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  return task;
}

/**
 * Return all tasks.
 * @returns {Array<{ id: number, title: string, completed: boolean, userId: number, createdAt: string }>}
 */
export function getTasks() {
  return [...tasks];
}

/**
 * Return tasks assigned to a specific user.
 * @param {number} userId
 * @returns {Array<{ id: number, title: string, completed: boolean, userId: number, createdAt: string }>}
 */
export function getTasksByUser(userId) {
  return tasks.filter((task) => task.userId === userId);
}

/**
 * Mark a task as completed.
 * @param {number} taskId
 * @returns {{ id: number, title: string, completed: boolean, userId: number, createdAt: string }}
 */
export function completeTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    throw new Error(`Task with ID ${taskId} not found.`);
  }

  task.completed = true;
  return task;
}

/**
 * Delete a task by ID.
 * @param {number} taskId
 * @returns {boolean} True if deleted, false if not found.
 */
export function deleteTask(taskId) {
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

/**
 * Reset in-memory tasks (useful for testing).
 */
export function resetTasks() {
  tasks.length = 0;
  nextTaskId = 1;
}
