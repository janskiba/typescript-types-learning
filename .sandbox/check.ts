// Plik weryfikacyjny dla lekcji 0001 — sprawdza, że przykłady się kompilują.
enum TaskStatus {
  Todo = "todo",
  InProgress = "in_progress",
  Done = "done",
}

enum Level {
  Low,
  High,
}

type TaskStatusUnion = "todo" | "in_progress" | "done";

const StatusObject = {
  Todo: "todo",
  InProgress: "in_progress",
  Done: "done",
} as const;
type StatusObjectType = (typeof StatusObject)[keyof typeof StatusObject];

// `as const` + `satisfies` razem
const Config = {
  retries: 3,
  timeoutMs: 1000,
} as const satisfies Record<string, number>;

// Zawężanie przez unie dyskryminowane + wyczerpujące sprawdzenie
type Result = { ok: true; value: number } | { ok: false; error: string };

function assertNever(x: never): never {
  throw new Error("Nieobsłużony przypadek: " + x);
}

function describe(result: Result): string {
  if (result.ok) {
    return "OK: " + result.value;
  }
  return "Błąd: " + result.error;
}

// enum jako typ = unia członków
const s: TaskStatus = TaskStatus.Todo;
const s2: TaskStatus = "todo"; // literal pasuje do typu enumu
const u: TaskStatusUnion = "todo";
const o: StatusObjectType = "todo";

// wartości vs typy w runtime
console.log("typeof TaskStatus =", typeof TaskStatus);
console.log("TaskStatus =", TaskStatus);
console.log("reverse mapping Level[0] =", Level[0]);
console.log(
  "reverse mapping stringowego enuma:",
  (TaskStatus as Record<string, unknown>)["Todo"],
);
console.log("typeof StatusObject =", typeof StatusObject);
console.log("Config =", Config);
console.log("describe =", describe({ ok: true, value: 42 }));
console.log(s, s2, u, o);

// `satisfies` zachowuje literality
const port = { port: 8080 } satisfies { port: number };
const literalPort = { port: 8080 } as const;
console.log(
  "port type:",
  typeof port.port,
  "literal:",
  typeof literalPort.port,
);

export {};
