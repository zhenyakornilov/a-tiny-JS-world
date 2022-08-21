class Inhabitant {
  constructor(species, name, gender, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.friends = [];
    this.saying = saying;
    this.props = [
      "species",
      "name",
      "gender",
      "friends",
      "saying",
    ];
  }

  toString() {
    return this.props
      .map((key) => {
        if (key === "friends") {
          if (this[key].length === 0) {
            return "No friends";
          }
          return this[key].map((friend) => friend.name).join(", ");
        }
        return this[key];
      })
      .join("; ");
  }
}

class Animal extends Inhabitant {
  constructor(species, name, gender, friends, saying) {
    super(species, name, gender, friends, saying);
    this.paws = 4;
  }

  toString() {
    console.log('Inhabitant child Animal method');
    return super.toString() + `; ${this.paws} paws`
  }
}

class Dog extends Animal {
  constructor(name, gender) {
    super("dog", name, gender);
    this.saying = "Woof-woof";
  }
}

class Cat extends Animal {
  constructor(name, gender) {
    super("cat", name, gender);
    this.saying = "Meooow";
  }
}

class Human extends Inhabitant {
  constructor(name, gender, friends, saying) {
    super("human", name, gender, friends, saying);
    this.legs = 2;
    this.hands = 2;
  }

  toString() {
    console.log('Inhabitant child Human method')
    return super.toString() + `; ${this.legs} legs, ${this.hands} hands`
  }
}

class Woman extends Human {
  constructor(name, saying) {
    super(name, "female");
    this.saying = saying;
  }
}

class Man extends Human {
  constructor(name, saying, friends) {
    super(name, "male");
    this.saying = saying;
    this.friends = friends;
  }
}

class CatWoman extends Human {
  constructor(cat) {
    super("Selina", "female");
    this.saying = cat.saying;
    this.species = "catwoman";
  }
}

const dog = new Dog("Ronnie", "male");
const cat = new Cat("Reggie", "male");
const woman = new Woman("Agnes", "Hello");
const man = new Man("Mark", "Hi", [cat, dog]);
const catWoman = new CatWoman(cat);

const allInhabitants = [dog, cat, woman, man, catWoman];

for (let inhabitant of allInhabitants) {
  print(inhabitant);
}
