enum TaskStatus { Todo = 'todo', Done = 'done' }

// `typeof TaskStatus` to typ obiektu, nie typ statusu.
const x: typeof TaskStatus = TaskStatus; // ✅ OK
// @ts-expect-error TS2741 — typ obiektu to nie unia członków.
const y: TaskStatus = TaskStatus;        // ❌ błąd
