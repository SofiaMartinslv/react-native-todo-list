import * as SQLite from "expo-sqlite";

let db;

const SQL_CREATE = `CREATE TABLE IF NOT EXISTS todo (
id INTEGER PRIMARY KEY autoincrement, description varchar(255) NOT NULL,
completed boolean)`;

function openDB() {
  if (!db) {
    db = SQLite.openDatabaseSync("appTodo.sqlite");
  }

  db.execSync(SQL_CREATE);
}

export async function getAllTodos() {
  openDB();
  return await db.getAllAsync("SELECT * FROM todo ORDER BY id");
}

export async function addTodo(description) {
  openDB();
  return await db.runAsync(
    "INSERT INTO todo (description, completed) VALUES (?,?)",
    [description, false]
  );
}

export async function deleteTodo(id) {
  openDB();
  return await db.runAsync("DELETE FROM todo WHERE id = ?", id);
}

export async function updateComplete(id, completed) {
  openDB();
  return await db.runAsync("UPDATE todo SET completed = ? WHERE id = ?", [
    completed,
    id,
  ]);
}
