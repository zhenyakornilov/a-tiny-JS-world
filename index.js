class Inhabitant {
  constructor(species, name, legs, hands, gender, saying) {
    this.species = species;
    this.name = name;
    this._legs = legs;
    this.gender = gender;
    this.saying = saying;
    this.constants = {
      props: ['species', 'name', 'gender', 'legs', 'saying'],
    };
  }

  toString() {
    return ['species', 'name', 'gender', 'legs', 'saying']
      .map(prop => this[prop]).join('; ');
  }
}

class Dog extends Inhabitant {
  constructor(name, gender, legs = 4, saying = 'woof') {
    super('dog', name, legs, gender, saying);
  }
}

class Human extends Inhabitant {
  constructor(name, gender, saying) {
    super('human', name, 2, gender, saying);
    this.hands = 2;
  }

  toString() {
    return super.toString() + this.hands + '; ';
  }
}

const heDog = new Dog('Bolt',
   'male', 4, 'GAFF');
const man = new Human('Jake', 'male', 'Horray!');
const woman = new Human('Jane', 'female', 'Mee-mee-mee!');

[man, woman, heDog].forEach(printElement);


function printInhabitant(inhabitant) {
  inhabitant.toString();
}
