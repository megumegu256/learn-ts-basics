"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo1 = {
    name: "TypeScriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
};
const todo2 = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 10, 16, 0),
};
console.log(JSON.stringify(todo1, null, 2));
console.log(JSON.stringify(todo2, null, 2));
