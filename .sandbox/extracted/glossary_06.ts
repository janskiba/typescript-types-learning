const TaskStatus = {
  Todo: 'todo',
  Done: 'done',
} as const;

type T = (typeof TaskStatus)['Todo']; // 'todo'
