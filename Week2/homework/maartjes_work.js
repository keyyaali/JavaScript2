'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here
{ name: 'Write a summary HTML/CSS',
      duration: 180 },
    { name: 'Some web development',
      duration: 120 },
    { name: 'Fix homework for class10',
      duration: 20 },
    { name: 'Talk to a lot of people',
      duration: 200 }
  ];
  const tuesday = [
    { name: 'Keep writing summary',
      duration: 240 },
    { name: 'Some more web development',
      duration: 180 },
    { name: 'Staring out the window',
      duration: 10 },
    { name: 'Talk to a lot of people',
      duration: 200 },
    { name: 'Look at application assignments new students',
      duration: 40 }
  ];
  const tasks = monday.concat(tuesday);
let twoDaysIncome = tasks
    .map(task => task.duration / 60)
    .filter(task => task >= 2)
    .map(total => total * 60)
    .reduce((a, b) => a + b, 0);
  console.log("Maartje earned " +twoDaysIncome+ ".00 Euro on Monday and Tuesday!"); 
