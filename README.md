# codeChallenges-backend

## Summary
The backend to the [Code Challenge Flash Cards](https://github.com/lizkavalski/codeChallenge-frontEnd), where the challenges are stored.

Tools and Languages used: JavaScript, Node, Express, JSON, Heroku, Jest

Link to the server- https://code-challenges-backend.herokuapp.com/

## Problem Domain  

Having a place to store Code Challenges, and being able to get a random challenge.

## Solution

Create a server that has Code Challenges problems, and making a middleware function that get a random challege. Inside the server each challeges has six part: a title, the problem, a visual, the algorthism, the pseudocode, and the type of challenge. The visual and pseudocode are images that are stored ['here'](https://github.com/lizkavalski/imageStorage). While there three types: Arrays, Linked List, and Trees which are used for one of the routues.


Currently their are three routes:
 * `/challenges`-To view all Code Challenges

 * `/random/challenge`-To view a random Code Challenges
 
 * `/random/challenge/:type`- To veiw a random Code challenge by `type`. 

 To add to the database a person would have to clone this repo. Then in the `data.json` put the 6 parts of the challenges(a title, the problem, a visual, the algorthism, the pseudocode, and the type of challenge) in a JSON file format. The 'title' is what the challenge is called. While the 'problem' gives some details about the challenge, and start off as "Problem:..." for formating in the front-end. Also since visual and pseudocode are images they a string URL that will go to the location of the image. Then in the algorthism section the steps are in a array fromat which allow me to make them into bullets points in the fronr-end.Below is a example of what a 'new' challenge should look like in the database.

 ```
  {
    "title": "Binary Search",
    "problem":"Problem: Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    "visual":"https://lizkavalski.github.io/imageStote/visual/array/binarySerch.png",
    "algorthism":[
      "Make a function that has accapt an array and a target value.",
      "Define a variable (low) as zero.",
      "Define a variable(high) as length of array minus 1.",
      "While low is less than or equal to high.",
      "Deifne varibale(middle) as low plus high divide by 2. - Using Math.floor to make sure numbers are whole numbers",
      "If array index is less than target value. - redifine low as middle plus one",
      "If else  index is more than target value. - redifine high as middle minus one",
      "else return middle",
      "return -1"
      ],
    "pseudocode":"https://lizkavalski.github.io/imageStote/pseudo/arrays/psBinarySearch.png",
    "type":"array"
  }
 ```    
The challenges are Leet Code Challenges and  all 'answers' are plausible soluions to the code challenges.

