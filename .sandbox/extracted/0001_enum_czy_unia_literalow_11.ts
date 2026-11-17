// const enum znika w trakcie kompilacji.
const enum Size { Small = 1, Large = 2 }

// Nie przejdzie z `--erasableSyntaxOnly`.
// Przy `isolatedModules` też może się zepsuć, bo transpile-only
// (np. Babel, SWC, esbuild) nie wstawi wartości w miejsce użycia.
