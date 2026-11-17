"use strict";
var StrEnum;
(function (StrEnum) {
    StrEnum["Todo"] = "todo";
    StrEnum["Done"] = "done";
})(StrEnum || (StrEnum = {}));
var NumEnum;
(function (NumEnum) {
    NumEnum[NumEnum["Low"] = 0] = "Low";
    NumEnum[NumEnum["High"] = 1] = "High";
})(NumEnum || (NumEnum = {}));
console.log("StrEnum['todo'] =", StrEnum['todo']);
console.log("StrEnum['Todo'] =", StrEnum['Todo']);
console.log("NumEnum['Low'] =", NumEnum['Low']);
console.log("NumEnum[0] =", NumEnum[0]);
console.log("NumEnum[1] =", NumEnum[1]);
