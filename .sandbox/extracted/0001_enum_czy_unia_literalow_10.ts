enum NumEnum { Low = 0, High = 1 }

// Surowa liczba pasuje do enumu liczbowego.
const d: NumEnum = 0; // ✅ OK, ale tracisz ochronę typu.
