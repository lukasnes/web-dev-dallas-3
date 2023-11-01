


const meals = ['artichokes', 'bbq', 'chili', 'donuts'];

meals.push('eggs');
meals.push('fajitas');

console.log(meals);
['artichokes', 'bbq', 'chili', 'donuts', 'eggs', 'fajitas']
meals[0].push('pizza');

const mealsSubset = meals.slice(1, 3);
console.log(meals);
console.log(mealsSubset);

meals.splice(1, 2, 'eggs', 'chocolate'); // remove 1 element at index 1
console.log(meals);

for (const meal of meals) {
    console.log(meal); // artichokes, bbq, chili
  }


const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];
  
  console.log(grid[0]); // ['A', 'B', 'C']
  console.log(grid[0][1]); // 'B'
  console.log(grid[1][0]); // 'D'
  
  grid[2][2] = 'J'; // changes 'I' to 'J'

//This will push a new item to the end of the array at position 2 in the grid array
grid[2].push('j')
console.log(grid[2]);