# Virtual-Pet

# Description
Welcome to my Virtual Pet project! This is a project built entirely with JavaScript and is part of the Command Shift HQ coding bootcamp. 

# The Aim
The aim of this exercise is to learn about Object Oriented Programming, and to further practice our unit tests as well as setting up our testing envrioments. This introduced concepts such as Constructor functions along with the Prototype function, and testing in the Node REPL. 

# Technology Used
* JavaScript
* Node.JS
* Jest

# What does this app do?
The app checks to see if our pet is alive or not. The rules to check weather or not the pet is alive are:
* If the pets age equals 30 or more
* If the pets hunger equals 10 or more
* If the pets fitness equals 0 or less

If any of these values are met, it will throw an error "Your pet is no longer alive!"

The pet ages by 1 everytime the hunger value meets or exceeds 5 and if the fitness meets or goes below 3

When the pets hunger is 5 or greater, it will return "I am hungry!"
When the pets fitness is 3 or lower, it will return "I need a walk!"
When the pets fitness and hunger equal 4, it will return "I feel Great!"

# Testing
For out testing we are using Jest and test withing the Node REPL. The tests check all of the variables above. 

# What Would I do if I had more time?
I would create a pet in css and html to have this shown in real time as the functions are called .
I would also like to Dry up the tests now that I have learnt more about beforeEach() 


