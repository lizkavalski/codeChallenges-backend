# codeChallenges-backend

## Summary
The backend to the [Code Challenge Flash Cards](https://github.com/lizkavalski/codeChallenge-frontEnd), where the challenges are stored.

Tools and Languages used: JavaScript, Node, Express, JSON, Heroku, Jest

Link to the server- https://code-challenges-backend.herokuapp.com/

## Problem Domain  

Having a place to store Code Challenges, and being able to get a random challenge.

## Solution

Create a server that has Code Challenges problems, and making a middleware function that get a random challege. Inside the server each challeges has six part: a title, the problem, a visual, the algorthism, the pseudocode, and the type of challenge. The visual and pseudocode are images that are stored ['here'](https://github.com/lizkavalski/imageStorage). While there three types: Arrays, Linked List, and Trees which are used for one of the routues.

The challenges are Leet Code Challenges and  all 'answers' are plausible soluions to the code challenges.

Currently their are three routes:
 * `/challenges`-To view all Code Challenges

 * `/random/challenge`-To view a random Code Challenges
 
 * `/random/challenge/:type`- To veiw a random Code challenge by `type`. 

 To add to the database a person would have to clone this repo.

