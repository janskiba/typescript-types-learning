const TaskStatus = {
  Todo: 'todo',
  InProgress: 'in_progress',
  Done: 'done',
} as const;

type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
