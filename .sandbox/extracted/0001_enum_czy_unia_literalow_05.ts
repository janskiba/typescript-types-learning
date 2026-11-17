enum TaskStatus {
  Todo = 'todo',
  InProgress = 'in_progress',
  Done = 'done',
}

// Dane z API przychodzą jako string. To `as` kłamie kompilatorowi.
const fromApi = JSON.parse('{"status":"todo"}') as { status: TaskStatus };
