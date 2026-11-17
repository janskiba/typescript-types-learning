enum TaskStatus { Todo = 'todo', Done = 'done' }
type TaskStatusUnion = 'todo' | 'done';

const a: TaskStatusUnion = TaskStatus.Todo; // ✅ OK
// @ts-expect-error TS2322 — surowy string nie pasuje do typu enumu.
const b: TaskStatus = 'todo';               // ❌ błąd
const c: TaskStatusUnion = 'todo';          // ✅ OK
