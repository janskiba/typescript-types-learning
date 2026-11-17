enum A { X = 'x' }
enum B { X = 'x' }

const a: A = A.X; // OK
// @ts-expect-error — enumy o różnych nazwach to różne typy.
const b: B = A.X; // błąd
