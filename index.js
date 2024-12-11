const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((total, batch) => {
    return total + batch;
  }, 0);
  
  console.log(totalBatteries);


  const letters = ["x", "y", "x", "z", "y", "y"];

const letterCount = letters.reduce((countObj, letter) => {
  countObj[letter] = (countObj[letter] || 0) + 1;
  return countObj;
}, {});

console.log(letterCount); 

const students = ["Alice", "Bob", "Charlie", "Dave"];
const artsShowcases = {
  Dance: [],
  Visual: [],
  Music: [],
  Theater: [],
  Writing: [],
};

// Mock function to assign students to showcases
const studentSorter = {
  showcaseAssign(student) {
    const showcases = ["Dance", "Visual", "Music", "Theater", "Writing"];
    return showcases[student.length % showcases.length]; // Just an example logic
  },
};

// Grouping students into showcases
students.reduce((showcases, student) => {
  const assignedShowcase = studentSorter.showcaseAssign(student);
  showcases[assignedShowcase].push(student);
  return showcases;
}, artsShowcases);

console.log(artsShowcases);

