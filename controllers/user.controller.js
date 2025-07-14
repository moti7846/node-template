export function getUsers(req, res) {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
}
