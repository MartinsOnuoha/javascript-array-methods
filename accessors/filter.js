const farm = [
  { name: 'cow', avatar: '🐮', type: 'animal'},
  { name: 'sheep', avatar: '🐑', type: 'animal'},
  { name: 'hen', avatar: '🐔', type: 'animal'},
  { name: 'lettuce', avatar: '🥬', type: 'plant'},
  { name: 'mushroom', avatar: '🍄', type: 'plant'}
];



const plantsOnly = farm.filter(element => element.type === 'plant');

console.log(plantsOnly);
/*
[ { name: 'lettuce', avatar: '🥬', type: 'plant' }, 
  { name: 'mushroom', avatar: '🍄', type: 'plant' } ] 
*/
