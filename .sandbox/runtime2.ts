enum StrEnum { Todo = 'todo', Done = 'done' }
enum NumEnum { Low, High }
console.log("StrEnum['todo'] =", (StrEnum as any)['todo']);
console.log("StrEnum['Todo'] =", (StrEnum as any)['Todo']);
console.log("NumEnum['Low'] =", (NumEnum as any)['Low']);
console.log("NumEnum[0] =", (NumEnum as any)[0]);
console.log("NumEnum[1] =", (NumEnum as any)[1]);
