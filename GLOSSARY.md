# TypeScript Glossary

Kanoniczna terminologia tego workspace'u. Terminy trafiają tutaj dopiero, gdy użytkownik
udowodni, że potrafi ich użyć poprawnie — na start mamy tylko bazę zadeklarowaną na wejściu.

## Baseline (zadeklarowane przez użytkownika, 2026-11-10)

**Union (unia)**:
Typ, który dopuszcza jedną z kilku wartości, np. `'a' | 'b'`.
_Avoid_: "suma typów", "either/or"

**Literal type (typ literału)**:
Typ, który opisuje jedną konkretną wartość, nie cały zakres typu podstawowego — np. `'todo'` zamiast `string`.
_Avoid_: "stała", "konst"

**Interface**:
Sposób opisania kształtu obiektu; rozszerzalny, składany z innymi interfejsami.
_Avoid_: "klasa bez implementacji"

**Type alias**:
Nazwany typ, często unia lub alias innego typu.
_Avoid_: "typedef"

## Do potwierdzenia (wprowadzane w lekcji 0001)

Poniższe terminy są wprowadzane w lekcji `0001-enum-czy-unia-literalow`. Po potwierdzeniu
przez ćwiczenie zostaną przeniesione do sekcji powyżej:

- **Enum**
- **Reverse mapping**
- **Narrowing (zawężanie)**
- **Typ nominalny**
- **`as const`**
- **`satisfies`**
- **`never`**

Pełna, printable wersja glosariusza do lekcji: `reference/glossary.html`.
