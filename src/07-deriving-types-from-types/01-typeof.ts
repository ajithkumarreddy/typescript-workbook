// typeof

let User = "Hanuman";

console.log(typeof User);

type UserName = typeof User;

// another usecase

const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["John", "Joe"],
};

type Settings = typeof settings;

function loadData(settings: Settings) {
  // ...
}

loadData(settings);
