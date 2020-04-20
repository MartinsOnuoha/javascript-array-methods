const farm = ['🐮', '🐑', '🐔'];

const oneFamily = farm.join();
const withLettuce = farm.join('🥬');

console.log(oneFamily); // 🐮,🐑,🐔
console.log(withLettuce); // 🐮🥬🐑🥬🐔
