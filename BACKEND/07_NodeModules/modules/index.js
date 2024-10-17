"use strict";

// console.log("hey this is from module folder ");

/* ------------------------------------------------------- */

/*
function test() {
  console.log("this is test function");
}
*/

/* ------------------------------------------------------- */

function test1() {
  console.log("this is test1 function");
}

function test2() {
  console.log("this is test2 function");
}

function test3() {
  console.log("this is test3 function");
}

/* ------------------------------------------------------- */

exports.test1 = function () {
  console.log("this is test1 function");
};

exports.test2 = function () {
  console.log("this is test2 function");
};

exports.test3 = function () {
  console.log("this is test3 function");
};

/* ------------------------------------------------------- */

// module.exports = [test1, test2, test3];

/* ------------------------------------------------------- */

// module.exports = { test1, test2, test3 };

/* ------------------------------------------------------- */
