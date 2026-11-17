# TypeScript: Typy i enumy — Resources

## Knowledge

- [Handbook: Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
  Autorytatywna strona o enumach: reverse mapping, `const enum` i jego pułapki, heterogeneous enums, union enums. Use for: wszystko o enumach i o pytaniach „enum czy unia”.
- [Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
  Unie, literal types, `as`, `as const`, rzutowania typów. Use for: fundament — czym różni się union od enumu na poziomie typów.
- [Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
  `typeof`, `in`, discriminated unions, `never` do wyczerpujących switchy. Use for: zawężanie typów, poziom mid/senior.
- [Release notes TS 4.9 — `satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
  Operator `satisfies` vs `as` vs `as const`. Use for: gdy porównujemy trzy operatory typowania.
- [Release notes TS 5.0 — All enums are union enums](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#all-enums-are-union-enums)
  Od 5.0 każdy enum jest unia swoich członków; `const` type parameters. Use for: wyjaśnienie, czemu zawężanie po enumie działa.
- [Release notes TS 5.8 — `--erasableSyntaxOnly`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html#the---erasablesyntaxonly-option)
  Flag odrzucający `enum`, `namespace` z kodem runtime, parameter properties. Use for: tooling a wybór enum vs unia.
- [Handbook: Declaration Merging — enums + namespaces](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-namespaces-with-classes-functions-and-enums)
  Historyczny wzorzec `enum` + `namespace` do statycznych metod. Use for: czytanie starego kodu, nie do pisania nowego.

## Practice

- [type-challenges](https://github.com/type-challenges/type-challenges)
  Katalog zadań typowych (easy → hard) z automatycznym sprawdzaniem. Use for: trening typowania poza lekcją, gdy temat zostanie opanowany.
- [Total TypeScript](https://www.totaltypescript.com)
  Matt Pocock — książki i tutoriale; ma praktyczne wskazówki o enum vs union. Use for: opinie o tym, jak wybierają zawodowcy.
- [typescript-eslint — how to ban a language feature](https://typescript-eslint.io/linting/troubleshooting#how-can-i-ban-specific-language-feature)
  Jak zablokować `const enum` / `enum` w repo lintem. Use for: „co powiedzieć w review”, gdy chcesz zakaz w zespole.
- [TypeScript Devblog](https://devblogs.microsoft.com/typescript/)
  Oficjalny blog zespołu TS — uzasadnienia decyzji. Use for: kontekst historyczny, „dlaczego tak zrobili”.

## Wisdom (Communities)

- [r/typescript](https://www.reddit.com/r/typescript/)
  Subreddit z wysokim sygnałem; dobre dyskusje o wzorcach typowania w praktyce. Use for: pytania „jak to robicie w prawdziwym projekcie”.
- [TypeScript Discord](https://www.typescriptlang.org/discord)
  Serwer zespołu TS; kanały `#help` i `#discussion`. Use for: pytania o konkretne zachowanie kompilatora.
- Lokalnie: code review w twoim zespole — najlepsze miejsce na testowanie reguł z lekcji (misja: rozumieć wybory w review).

## Gaps

- Brak oficjalnej, oficjalnie wspieranej tabeli „enum vs unia vs `as const`”. Źródła (Total TypeScript, dyskusje) dają rekomendacje, ale to community guidance, nie dokumentacja.
- Brak polskojęzycznego źródła wysokiej jakości o typowaniu — wszystko powyżej jest anglojęzyczne.
- Brak potwierdzonego stanowiska zespołu TS o enumach w publicznym API biblioteki (opinia Total TypeScript ≠ gwarancja).

## Notatki
- Weryfikacja lokalna: TypeScript 7.0.2 (`strict`) zainstalowany w `.sandbox/` — wszystkie zachowania użyte w lekcji sprawdzone kompilatorem.
