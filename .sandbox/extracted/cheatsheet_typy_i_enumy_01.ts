enum TaskStatus {
  Todo = 'todo',
  Done = 'done',
}

// typ unii członków
type Member = TaskStatus; // TaskStatus.Todo | TaskStatus.Done

// typ obiektu runtime
type ObjectType = typeof TaskStatus;

// wartości do iteracji
const values = Object.values(TaskStatus); // ['todo', 'done']
