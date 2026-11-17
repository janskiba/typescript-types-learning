enum NumEnum { Low = 0, High = 1 }
enum StrEnum { Todo = 'todo' }

// Reverse mapping działa tylko dla enumów liczbowych.
console.log(NumEnum[0]);      // 'Low'
console.log(NumEnum['Low']);  // 0
// @ts-expect-error — string enum nie ma właściwości 'todo'.
console.log(StrEnum['todo']); // undefined (brak reverse mappingu)
