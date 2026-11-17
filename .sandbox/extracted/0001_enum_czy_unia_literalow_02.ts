type TaskStatusUnion = 'todo' | 'done';

// Typy znikają po kompilacji — w runtime nie ma ich wcale.
console.log(typeof (undefined as unknown as TaskStatusUnion)); // undefined
