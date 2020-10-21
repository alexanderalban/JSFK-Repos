//scores question!


let scores = {
    "Luke": 0,
    "Leia": 0,
    "Han" : 0,
    "Chewie" : 0,
  };
  
  console.log(scores);
  
  scores["Luke"] += 2;
  scores["Chewie"] += 6;
  
  console.log(scores);

  //how to find an object value when it is within an array, within an object (i know, right?)

  let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
  };
  
  console.log(myCrazyObject["some array"][2].number);