# codeChallenges-backend

## Summary
The backend to the [Code Challenge Flash Cards](https://github.com/lizkavalski/codeChallenge-frontEnd), where the challenges are stored.

Tools and Languages used: JavaScript, Node, Express, JSON, Heroku, Jest

Link to the server- https://code-challenges-backend.herokuapp.com/

## Problem Domain  

Having a place to store Code Challenges, and being able to get a random challenge.

## Solution

Create a server that has Code Challenges problems, and making a middleware function that get a random challege. Inside the server each challeges has six part: a title, the problem, a visual, the algorthism, the pseudocode, and the type of challenge. 

Currently their are three routes:
 * `/challenges`-To view all Code Challenges

 * `/random/challenge`-To view a random Code Challenges
 
 * `/random/challenge/:type`- To veiw a random Code challenge by `type`. Currently the types are: arrays, linkedlist, and tree.