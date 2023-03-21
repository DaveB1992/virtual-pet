const MAX_FITNESS = 10;
const MIN_FITNESS = 0;
const FITNESS_INCREMENT = 4;
const MAX_AGE = 30;
const AGE_INCREMENT = 1;
const MAX_HUNGER = 10;
const MIN_AGE = 0;
const MIN_HUNGER = 0;


function Pet (name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.child = [];
};

Pet.prototype = {
    get isAlive(){
            return (
            this.age < MAX_AGE && 
            this.hunger < MAX_HUNGER && 
            this.fitness > MIN_FITNESS
            )
        }
    };
    
Pet.prototype.growUp = function (){
    if (!this.isAlive){
     throw new Error('Your pet is no longer alive')
        }
        this.age += AGE_INCREMENT;
        this.hunger += 5;
        this.fitness -= 3;
        
};

Pet.prototype.walk =  function (){
    if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        this.fitness = Math.min(this.fitness + FITNESS_INCREMENT, MAX_FITNESS);
};
    
Pet.prototype.feed = function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        if((this.hunger + 3) <= MIN_HUNGER){
            this.hunger += 3
        } else {
            this.hunger = MIN_HUNGER;
        }    
}  

Pet.prototype.checkUp = function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        if ((this.fitness <= 3)){
            return 'I need a walk!'
        } 
        if((this.hunger >= 5)){
            return 'I am hungry!'
        }
        if((this.fitness <= 3 && this.hunger >= 5)) {
            return 'I am hungry and I need a walk!'
        } else {
            return 'I feel great!'
        }
}

Pet.prototype.haveBaby = function (name){
    const child = new Pet(name)
    this.child.push(child)
}

module.exports = Pet