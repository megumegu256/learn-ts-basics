export{};
let deadline: Date = new Date(2024, 10, 2, 11, 45);
console.log(`${deadline.getFullYear()}/${(deadline.getMonth() + 1).toString().padStart(2, '0')}/${deadline.getDate().toString().padStart(2, '0')} ${deadline.getHours().toString().padStart(2, '0')}:${deadline.getMinutes().toString().padStart(2, '0')}`);