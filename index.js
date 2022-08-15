/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

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

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

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
