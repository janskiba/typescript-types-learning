enum TaskStatus { Todo = 'todo' }

// Zmiana wartości stringowej to breaking change w bazie / JSON.
// `Todo = 'TODO'` zmieni zapisane dane, a nie tylko nazwę w kodzie.
