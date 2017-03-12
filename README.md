#Requirements:

1.
 
Write a function to retrieve a value according to a path in a data structure contains nested object. If any of the value is undefined along the path, the result will be undefined.
 
Here is a possible data structure: 
const data = {
            name: ‘Mary’
            pet: {
                        name: ‘Ringo’,
                        kid: {
                                    name: ‘Tia’,
                                    owner: {
                                                name: ‘Tim’
                                    }
                        }
            }
}
 
Mary is a breeder. She has a pet called Ringo. Ringo is the father of a puppy called Tia. Tia is owned by Tim.
In this data structure, any nested object can be undefined. That is for example, Mary may have no pet, Ringo may have no kid, Tia may have no owner.
 
If this function is named path then the following needs to be true:
  path([‘pet’, ‘kid’, ’name’])(data) // === ‘Tia’
  path([‘pet’, ‘kid’, ’owner’])(data) // === {name: ’Tim’}
  path([‘pet’, ‘owner’])(data) // === undefined
 
Code needs to be written in javascript. 
We prefer ES6 over ES5.
We prefer functional over OOP.
We prefer tests over no tests.
 
 
2.
Given a ES6 function like below:
const add = (a, b, c) => a + b + c;
write a function named ‘cu’ to take the ‘add’ function as its argument:
const cu = (fn) => …
const cuAdd = cu(add);
that the following will be evaluated to true.
cuAdd(1, 2, 3) === 6
cuAdd(1)(2, 3) === 6
cuAdd(1, 2)(3) === 6
cuAdd(1)(2)(3) === 6


#installation:

npm install


#test:

npm test