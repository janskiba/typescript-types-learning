// check2.ts — reguły przypisania dla enumów (kontekst dla lekcji)
enum StrEnum {
  Todo = 'todo',
  Done = 'done',
}
enum NumEnum {
  Low,
  High,
}

type StrUnion = 'todo' | 'done';

// 1) enum literal -> union literal: OK?
const a: StrUnion = StrEnum.Todo;

// 2) surowy string literal -> enum: błąd?
const b: StrEnum = 'todo';

// 3) surowy string literal -> union: OK
const c: StrUnion = 'todo';

// 4) liczba -> enum liczbowy (TS 5.0+ odrzuca?)
const d: NumEnum = 0;

// 5) element enumu -> typ enumu: OK
const e: NumEnum = NumEnum.Low;

// 6) element enumu stringowego -> typ tego enuma
const f: StrEnum = StrEnum.Todo;

// 7) typeof enumu = typ obiektu
const g: typeof StrEnum = StrEnum;

// 8) case bez default w switchu - wyczerpujący?
function handle(v: StrEnum): string {
  switch (v) {
    case StrEnum.Todo:
      return 'todo';
    case StrEnum.Done:
      return 'done';
  }
}

export {};
