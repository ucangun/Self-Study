const person = {
    username: "Umut Can",
    age: 26,
    city: "Berin",
    isActive: true,
};
const person2 = {
    username: "Umut Can",
    age: 26,
    city: "Berlin",
    isActive: true,
};
const redCar = {
    model: "X5",
    year: new Date(),
    price: 20000,
    color: "red",
    getName: () => "BMW",
};
/* ---------------------------------- */
/*                                    */
/* ---------------------------------- */
const user1 = {
    username: "ucan",
    firstName: " Umut",
    lastName: "Can",
    getName: () => {
        console.log("Hello");
    },
};
const adminUser = {
    username: "admin",
    firstName: "admin",
    lastName: "admin",
    isAdmin: true,
    password: "1234",
    getName: () => console.log("admin"),
};
const users = [];
// users.push(5);
// users.push("5");
users.push({ username: "as", firstName: "as", lastName: "as", getName() { } });
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
const testGenerics = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: ["extra", "asdfsadf", "generic"],
};
const testGenerics2 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [5, 7, 9],
};
const testGenerics3 = {
    id: 1,
    title: "test",
    content: "test",
    createdAt: new Date(),
    extra: [{ id: 1, title: "asdfsdf" }],
};
