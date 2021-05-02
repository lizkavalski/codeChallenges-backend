# codeChallenges-backend 
## [![Travis Build Status](https://travis-ci.org/lizkavalski/codeChallenges-backend.svg?branch=main)](https://travis-ci.org/lizkavalski/codeChallenges-backend) [![https://github.com/lizkavalski/codeChallenges-backend/actions](https://github.com/lizkavalski/codeChallenges-backend/actions/workflows/node.js.yml/badge.svg)](https://github.com/lizkavalski/codeChallenges-backend/actions)

## Summary
The backend to the [Code Challenge Flash Cards](https://github.com/lizkavalski/codeChallenge-frontEnd), where the challenges are stored.

Tools and Languages used: JavaScript, Node, Express, JSON, Heroku, Jest

[Link to the server](https://code-challenges-backend.herokuapp.com/)

## Problem Domain  

Having a place to store Code Challenges, and being able to get a random challenge.

## Solution

Create a server that has Code Challenges problems, and making a middleware function that get a random challenge. Inside the server each challenges has six part: a title, the problem, a visual, the algorithms, the pseudocode, and the type of challenge. The visual and pseudocode are images that are stored ['here'](https://github.com/lizkavalski/imageStorage). While there are three types: Arrays, Linked List, and Trees which are used for one of the routes.


Currently their are three routes:
 * `/challenges`-To view all Code Challenges

 * `/random/challenge`-To view a random Code Challenges
 
 * `/random/challenge/:type`- To veiw a random Code challenge by `type`. 

 All routes are only 'GET' route meaning a person can only read the information from that route. To use a route a person just has to take the __'link to the deploy server'__ and place the desire route to the end of the link.

 To add to the database a person would have to clone this repo. Then in the `data.json` put the 6 parts of the challenges(a title, the problem, a visual, the algorithms, the pseudocode, and the type of challenge) in a JSON file format. The 'title' is what the challenge is called. While the 'problem' gives some details about the challenge, and start off as "Problem:..." for the formatting purpose for  the front-end. Both visual and pseudocode display images by using a string URL that will go to the location of the image. It can use a base64 string for the images, but it is [highly discourage](https://medium.com/snapp-mobile/dont-use-base64-encoded-images-on-mobile-13ddeac89d7c). The reason being is that it make the image about 30% bigger and slow the server. Then in the algorithms section the steps are in an array format which allow me to make them into bullets points in the front-end. Below is an example of what a 'new' challenge should look like in the database. Then lastly type of challenge(array,linkedlist, Binary tree, etc)
 
 Below is a example of what a 'new' challenge should look like in the database.

 ```
{
    "title": "Binary Search", 
    "problem":"Problem: Given a sorted (in ascending order) integer array nums of n elements an a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    "visual":"https://lizkavalski.github.io/imageStorage/visual/array/binarySerch.png",
    "algorithms":[ 
        "Make a function that has accept an array and a target value.", 
        "Define a variable (low) as zero.", 
        "Define a variable(high) as length of array minus 1.",
        "While low is less than or equal to high.",
        "Define variable(middle) as low plus high divide by 2. - Using Math.floor 
        to make sure numbers are whole numbers",
        "If array index is less than target value. - redefine low as middle plus 
        one",
        "If else index is more than target value. - redefine high as middle minus 
        one", 
        "else return middle", 
        "return -1" 
       ], 
    "pseudocode":"https://lizkavalski.github.io/imageStorage/pseudo/arrays/psBinarySearch.png",
    "type":"array"
  }, 
 ```    
The challenges are Leet Code Challenges and  all 'answers' are plausible soluions to the code challenges.

