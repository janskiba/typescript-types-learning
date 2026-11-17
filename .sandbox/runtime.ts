enum StrEnum { Todo = 'todo', Done = 'done' }
enum NumEnum { Low, High }
type OnlyType = 'todo' | 'done';
const obj = { Todo: 'todo' } as const;
console.log('typeof StrEnum =', typeof StrEnum);
console.log('StrEnum =', JSON.stringify(StrEnum));
console.log('NumEnum[0] =', NumEnum[0], '| NumEnum[Low] =', NumEnum[NumEnum.Low]);
console.log('StrEnum["Todo"] =', (StrEnum as any)['Todo']);
console.log('typeof OnlyType =', typeof (undefined as unknown as OnlyType));
console.log('typeof obj =', typeof obj, '| obj.Todo =', obj.Todo);
console.log('Object.keys(StrEnum) =', Object.keys(StrEnum));
