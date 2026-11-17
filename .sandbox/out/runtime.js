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
const obj = { Todo: 'todo' };
console.log('typeof StrEnum =', typeof StrEnum);
console.log('StrEnum =', JSON.stringify(StrEnum));
console.log('NumEnum[0] =', NumEnum[0], '| NumEnum[Low] =', NumEnum[NumEnum.Low]);
console.log('StrEnum["Todo"] =', StrEnum['Todo']);
console.log('typeof OnlyType =', typeof undefined);
console.log('typeof obj =', typeof obj, '| obj.Todo =', obj.Todo);
console.log('Object.keys(StrEnum) =', Object.keys(StrEnum));
