
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}
function addTwoNumbers(a,b){




 const sum = a+b;
return sum;
}
 const add = addTwoNumbers(5,10);
 console.log(add);



const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);





  
 