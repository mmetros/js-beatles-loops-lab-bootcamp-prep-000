// add solution here


function johnLennonFacts(facts){
// use a while loop
var i = 0
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}



function iLoveTheBeatles(number){
  var emptyArray = [];
  // create a do-while loop
  do{
    emptyArray.push("I love the Beatles!");
    number++;
  }while(number < 15);


  return emptyArray
}