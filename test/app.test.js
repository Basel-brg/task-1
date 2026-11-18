import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { createUser, getUsers, getUserById, resetUsers } from '../src/users.js';
import {
  createTask,
  getTasks,
  getTasksByUser,
  completeTask,
  deleteTask,
  resetTasks,
} from '../src/tasks.js';

describe('Users and Tasks modules', () => {
  beforeEach(() => {
    resetTasks();
    resetUsers();
  });

  it('creates and retrieves users', () => {
    const user = createUser('Alice', 'Alice@Example.com');
    assert.equal(user.id, 1);
    assert.equal(user.email, 'alice@example.com');
    assert.equal(getUsers().length, 1);
    assert.deepEqual(getUserById(1), user);
  });

  it('creates, completes, filters, and deletes tasks', () => {
    const alice = createUser('Alice', 'alice@example.com');
    const bob = createUser('Bob', 'bob@example.com');

    const t1 = createTask('Task 1', alice.id);
    const t2 = createTask('Task 2', bob.id);

    assert.equal(getTasks().length, 2);
    assert.equal(getTasksByUser(alice.id).length, 1);

    const completed = completeTask(t1.id);
    assert.equal(completed.completed, true);

    assert.equal(deleteTask(t2.id), true);
    assert.equal(deleteTask(999), false);
    assert.equal(getTasks().length, 1);
  });

  it('throws when creating a task for a non-existent user', () => {
    assert.throws(() => createTask('Orphan task', 42), /does not exist/);
  });
});
