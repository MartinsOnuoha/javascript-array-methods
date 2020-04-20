const farm = [
  { name: 'cow', avatar: '🐮', type: 'animal'},
  { name: 'sheep', avatar: '🐑', type: 'animal'},
  { name: 'hen', avatar: '🐔', type: 'animal'},
  { name: 'lettuce', avatar: '🥬', type: 'plant'},
  { name: 'mushroom', avatar: '🍄', type: 'plant'}
];

farm.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name}`)
});
/**
1. cow ​​​​
2. sheep
3. hen
4. lettuce
5. mushroom
 */
