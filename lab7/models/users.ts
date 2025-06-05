// models/users.ts
interface User {
  username: string;
  password: string; 
}

const users: User[] = [
  { username: "admin", password: "123456" },
  { username: "test", password: "testpass" }
];

export async function findUserByUsername(username: string): Promise<User | undefined> {
  return users.find(u => u.username === username);
}
