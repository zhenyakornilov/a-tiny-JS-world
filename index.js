const dog = {
  species: "dog",
  name: "Ronnie",
  gender: "male",
  paws: 4,
  legs: 0,
  hands: 0,
  saying: "Woof!",
};

const cat = {
  species: "cat",
  name: "Reggie",
  gender: "male",
  paws: 4,
  legs: 0,
  hands: 0,
  saying: "Meoooow!",
};

const woman = {
  species: "human",
  name: "Agnes",
  gender: "female",
  paws: 0,
  legs: 2,
  hands: 2,
  saying: "Hi, my name is Agnes",
};

const man = {
  species: "human",
  name: "Mark",
  gender: "male",
  paws: 0,
  legs: 2,
  hands: 2,
  saying: `Hello, I am Mark`,
  friends: [cat.name, dog.name],
};

const catWoman = {
  species: "catwoman",
  name: "Selina",
  gender: "female",
  paws: 0,
  legs: 2,
  hands: 2,
  saying: cat.saying,
};

const inhabitants = [dog, cat, woman, man, catWoman];
const properties = [
  "species",
  "name",
  "gender",
  "paws",
  "legs",
  "hands",
  "saying",
  "friends",
];

for (let inhabitant of inhabitants) {
  print(properties.map((key) => inhabitant[key]).join("; "));
}
