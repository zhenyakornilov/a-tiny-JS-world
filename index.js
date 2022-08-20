// const dog = {
//   species: "dog",
//   name: "Ronnie",
//   gender: "male",
//   paws: 4,
//   legs: 0,
//   hands: 0,
//   saying: "Woof!",
// };

// const cat = {
//   species: "cat",
//   name: "Reggie",
//   gender: "male",
//   paws: 4,
//   legs: 0,
//   hands: 0,
//   saying: "Meoooow!",
// };

// const woman = {
//   species: "human",
//   name: "Agnes",
//   gender: "female",
//   paws: 0,
//   legs: 2,
//   hands: 2,
//   saying: "Hi, my name is Agnes",
// };

// const man = {
//   species: "human",
//   name: "Mark",
//   gender: "male",
//   paws: 0,
//   legs: 2,
//   hands: 2,
//   saying: `Hello, I am Mark`,
//   friends: [cat, dog],
// };

// const catWoman = Object.create(cat);

// catWoman.species = "catwoman";
// catWoman.name = "Selina";
// catWoman.gender = "female";
// catWoman.paws = 0;
// catWoman.legs = 2;
// catWoman.hands = 2;

// const inhabitants = [dog, cat, woman, man, catWoman];
// const properties = [
//   "species",
//   "name",
//   "gender",
//   "paws",
//   "legs",
//   "hands",
//   "friends",
//   "saying",
// ];

// for (let inhabitant of inhabitants) {
//   print(
//     properties
//       .map((key) => {
//         if (key === "friends") {
//           if (key in inhabitant) {
//             return inhabitant[key].map((friend) => friend.name).join(", ");
//           }           
//           return "No friends";
//         }
//         return inhabitant[key];
//       })
//       .join("; ")
//   );
// }


class Inhabitant {
  constructor(species, name, gender, paws, legs, hands, friends, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.paws = paws;
    this.legs = legs;
    this.hands = hands;
    this.friends = friends;
    this.saying = saying
  }
}


class Animal extends Inhabitant {
  constructor(species, name, gender, friends, saying) {
    super(species, name, gender, friends, saying)
    this.paws = 4;
    this.legs = 0;
    this.hands = 0;
  }
}

class Dog extends Animal {
  constructor(name, gender) {
    super('dog', name, gender)
    this.saying = 'Woof-woof'
  }
}

class Cat extends Animal {
  constructor(name, gender) {
    super ('cat', name, gender)
    this.saying = 'Meooow'
  }
}

class Human extends Inhabitant {
  constructor(name, gender, friends, saying) {
    super('human', name , gender, friends, saying);
    this.paws = 0;
    this.legs = 2;
    this.hands = 2;
  }
}

class Woman extends Human {
  constructor(name, saying) {
    super(name, 'female');
    this.saying = saying
  }
}

class Man extends Human {
  constructor(name, saying, ...friends) {
    super(name, saying) 
    this.saying = saying;
    this.friends = friends
  }
}



const dog = new Dog('Ronnie', 'male');
const cat = new Cat('Reggie', 'male');
const woman = new Woman('Agnes', 'Hello');
const man = new Man('Mark', 'Hi', cat, dog)
console.log(dog, cat, woman, man);
