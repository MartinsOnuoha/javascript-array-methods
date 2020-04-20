const farm = [
  { name: 'cow', avatar: '🐮', type: 'animal'},
  { name: 'sheep', avatar: '🐑', type: 'animal'},
  { name: 'hen', avatar: '🐔', type: 'animal'},
  { name: 'lettuce', avatar: '🥬', type: 'plant'},
  { name: 'mushroom', avatar: '🍄', type: 'plant'}
];

const farmHasOnlyAnimals = farm.every(element => element.type === 'animal');

console.log(farmHasOnlyAnimals) // false
