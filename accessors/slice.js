const farm = ['🐮', '🐑', '🐔'];

const stringFarm = farm.toString();
const noCows = farm.slice(1);
const onlyCows = farm.slice(0, 1);

console.log(copyFarm); // [ '🐮', '🐑', '🐔' ]
console.log(noCows); // [ '🐑', '🐔' ]
console.log(onlyCows); // [ '🐮' ]
