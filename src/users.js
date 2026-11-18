const users = [];
let nextUserId = 1;

/**
 * Create a new user and store it in memory.
 * @param {string} name
 * @param {string} email
 * @returns {{ id: number, name: string, email: string, createdAt: string }}
 */
export function createUser(name, email) {
  if (!name || !email) {
    throw new Error('Both name and email are required to create a user.');
  }

  const user = {
    id: nextUserId++,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  return user;
}

/**
 * Return all users.
 * @returns {Array<{ id: number, name: string, email: string, createdAt: string }>}
 */
export function getUsers() {
  return [...users];
}

/**
 * Find a user by ID.
 * @param {number} id
 * @returns {{ id: number, name: string, email: string, createdAt: string } | undefined}
 */
export function getUserById(id) {
  return users.find((user) => user.id === id);
}

/**
 * Reset in-memory users (useful for testing).
 */
export function resetUsers() {
  users.length = 0;
  nextUserId = 1;
}
