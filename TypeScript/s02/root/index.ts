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

//*  Interface

interface ICar {
  model: string;
  year: Date;
  price: number;
  color: string;
  getName: () => string;
}

const redCar: ICar = {
  model: "X5",
  year: new Date(),
  price: 20000,
  color: "red",
  getName: () => "BMW",
};

interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  getName: () => void;
}

const user1: IUser = {
  username: "ucan",
  firstName: " Umut",
  lastName: "Can",
  getName: () => {
    console.log("Hello");
  },
};

// interface IAdminUser {
//   username: string;
//   firstName: string;
//   lastName: string;
//   getName: () => void;
//   isAdmin: boolean;
//   password: string;
// }

interface IManagerUser {
  username: string;
  firstName: string;
  lastName: string;
  getName: () => void;
  isManager: boolean;
  department: string;
}

// extend method with interface

interface IAdminUser2 extends IUser {
  isAdmin: boolean;
  password: string;
}

const adminUser: IAdminUser2 = {
  username: "admin",
  firstName: "admin",
  lastName: "admin",
  isAdmin: true,
  password: "1234",
  getName: () => console.log("admin"),
};
