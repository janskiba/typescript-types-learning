enum TaskStatus {
  Todo = 'todo',
  InProgress = 'in_progress',
  Done = 'done',
}

// Enum istnieje w runtime jako zwykły obiekt.
console.log(typeof TaskStatus); // object
console.log(TaskStatus);
// { Todo: 'todo', InProgress: 'in_progress', Done: 'done' }
