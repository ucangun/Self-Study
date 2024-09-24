const person: {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
} = {
  username: "Umut Can",
  age: 26,
  city: "Berin",
  isActive: true,
};

type Person = {
  username: string;
  age: number;
  city: string;
  isActive: boolean;
};

const person2: Person = {
  username: "Umut Can",
  age: 26,
  city: "Berlin",
  isActive: true,
};
