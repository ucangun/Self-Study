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

/* ---------------------------------- */
/*                                    */
/* ---------------------------------- */

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

const users: IUser[] = [];

// users.push(5);
// users.push("5");

users.push({ username: "as", firstName: "as", lastName: "as", getName() {} });

//! Type Infrence

let myName = "Anthony";

// myName = 1234;

let arr = []; // any[]

let myArr = [
  {
    username: "asd",
    department: "asdf",
    salary: 3000,
  },
];

// myArr.push(5);
myArr.push({ username: "asdf", department: "sdfg", salary: 4000 });

const myArr2 = [...myArr, ...users]; // myArr | IUser iki tipi de birlestirmis oldu.

// myArr2.push(2);

//! Generics

//* generic kullanmadan
interface Auth {
  id: number;
  username: string;
}

interface Category {
  id: number;
  title: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  extra: Auth[] | Category[];
}

//* generic kullanarak
interface PostBetter<T> {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  extra: T[];
}

const testGenerics: PostBetter<string> = {
  id: 1,
  title: "test",
  content: "test",
  createdAt: new Date(),
  extra: ["extra", "asdfsadf", "generic"],
};

const testGenerics2: PostBetter<number> = {
  id: 1,
  title: "test",
  content: "test",
  createdAt: new Date(),
  extra: [5, 7, 9],
};

const testGenerics3: PostBetter<{ id: number; title: string }> = {
  id: 1,
  title: "test",
  content: "test",
  createdAt: new Date(),
  extra: [{ id: 1, title: "asdfsdf" }],
};

const testGenerics4: PostBetter<Category> = {
  id: 1,
  title: "asda",
  content: "adsdasd",
  createdAt: new Date(),
  extra: [{ id: 2, title: "deneme" }],
};

const testGenerics5: PostBetter<Auth> = {
  id: 1,
  title: "asda",
  content: "adsdasd",
  createdAt: new Date(),
  extra: [{ id: 2, username: "admin" }],
};
