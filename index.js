// Most common initial code example

const INHABITANT = {
  propertiesList: ['species', 'name', 'gender', 'legs', 'hands', 'say', 'friends'],
  species : {
    human: 'human',
    dog: 'dog',
    cat: 'cat',
  },
};

const man = {
  species: INHABITANT.species.human,
  name: 'Jack',
  gender: 'male',
  legs: 2,
  hands: 2,
  say: 'Argh!',
  friends: [],
  addFriend,
  toString,
};

const woman = {
  species: INHABITANT.species.human,
  name: 'Jane',
  gender: 'female',
  legs: 2,
  hands: 2,
  say: 'What a beautiful day!',
  friends: [],
  addFriend,
  toString,
};

const dog = {
  species: INHABITANT.species.dog,
  name: 'Toby',
  gender: 'mail',
  legs: 4,
  hands: 0,
  say: 'woof!',
  friends: [],
  addFriend,
  toString,
};

const cat = {
  species: INHABITANT.species.cat,
  name: 'Kitty',
  gender: 'female',
  legs: 4,
  hands: 0,
  say: 'meow!',
  friends: [],
  addFriend,
  toString,
};

function addFriend(friend) {
  this.friends.push(friend);
  friend.friends.push(this);
}

function toString() {
  return INHABITANT.propertiesList.map(prop => `${prop}: ${this[prop]}`).join('; ');
}

cat.addFriend(dog);
man.addFriend(dog);
man.addFriend(woman);
woman.addFriend(cat);

[man, woman, dog, cat]
  .forEach(inhabitant => printElement(inhabitant));


/*
print(man.species + '; ' + man.name + '; ' + man.gender + '; ' + man.legs + '; ' + man.hands + '; ' + man.say);
print(`species: ${woman.species}; name: ${woman.name}; gender: ${woman.gender}; legs: ${woman.legs}; hands: ${woman.hands}; say: ${woman.say};`
  + woman.fiends);
print(dog.species + '; ' + dog.name + '; ' + dog.gender + '; ' + dog.legs + '; ' + dog.hands + '; ' + dog.say);
print(cat.species + '; ' + cat.name + '; ' + cat.gender + '; ' + cat.legs + '; ' + cat.hands + '; ' + cat.say);
*/
