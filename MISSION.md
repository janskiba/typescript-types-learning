# Mission: Typy i enumy w TypeScript (poziom mid/senior)

## Why
Chcę rozumieć decyzje typowe w teamie — czyja zmiana jest dobrym typem, a kiedy kompromituje publiczne API. TypeScript jest w moim zespole standardem, a typy i enumy są miejscem, gdzie pojawia się najwięcej nieporozumień w code review.

## Success looks like
- Potrafię w code review wskazać, kiedy ktoś użył `enum` zamiast unii literałów (i odwrotnie) — i umiem uzasadnić wybór.
- Umiej wytłumaczyć, co robią `as const`, `satisfies` i `as` — i kiedy każde z nich jest błędem.
- Potrafię przeczytać typ, który używa unii dyskryminowanej, i zobaczyć, gdzie TS pomaga w zawężaniu.
- Wiem, kiedy `const enum` wybuchnie w buildzie (Babel / `isolatedModules` / `erasableSyntaxOnly`).

## Constraints
- Proste słowa, konkretne przykłady, bez zalewu szczegółami.
- Każda lekcja ma dać jeden konkretny zwrot, który zostanie w głowie.
- Preferuję format „ściąga" niż wykładu.

## Out of scope
- Zaawansowane generyki (conditional types, mapped types, inference w template literal types).
- Brzydkie type-level programowanie (type-challenges jako główny temat).
- Konfiguracja projektu (tsconfig, bundlery, ESLint) poza tym, co jest potrzebne do zrozumienia `const enum` i `isolatedModules`.
