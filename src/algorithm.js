const test1 = [1,2];
const test2 = [1,2,3];
const test3 = [1,2,3,4];
const test4 = [1,2,3,4,5];


const tuples = (arr)=> {
  let tuples = [];
  
  for(var i = 0; i < arr.length - 1; i++) {
    for(var j = i+1; j < arr.length;j++) {
      tuples.push([arr[i],arr[j]]);
    }
  }
  console.log(`# of tuples: ${tuples.length}`);
  return tuples;
};



console.log(tuples(test3));  