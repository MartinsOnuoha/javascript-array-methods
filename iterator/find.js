const farm = [
  { name: 'cow', avatar: '🐮', type: 'animal'},
  { name: 'sheep', avatar: '🐑', type: 'animal'},
  { name: 'hen', avatar: '🐔', type: 'animal'},
  { name: 'lettuce', avatar: '🥬', type: 'plant'},
  { name: 'mushroom', avatar: '🍄', type: 'plant'}
];

const findCow = farm.find(element => element.avatar === '🐮');

console.log(findCow); // { name: 'cow', avatar: '🐮', type: 'animal' } 
