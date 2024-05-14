const x = -5;
const y = 8;

if (x > 0 && y > 0) {
  console.log("Beide ist Richtig");
} else {
  console.log("mindestens Einer ist falsch");
}

console.log("12" && 5 && "Merhaba");
console.log("12" && 0 && "Merhaba");
console.log("12" && false && "Merhaba");
console.log("" && null && "Merhaba");

//

console.log("object" || "" || 1 || 0);
console.log("" || undefined || 1 || 0);
console.log("" || undefined || [] || "harvey");

let ad = "Umut";
let job = "admin";

if (ad === "Umut" && job === "admin") {
  console.log("Welcome");
} else {
  console.log("X");
}

let toplam1 = 0;

for (i = 0; i <= 100; i++) {
  toplam1 += i;
}

console.log(toplam1);

let toplam2 = 0;
for (let i = 2; i <= 100; i += 2) {
  toplam2 += i;
}
console.log(toplam2);

for (let i = 1; i <= 10; i++) {
  let kare = i * i;
  console.log("  Sayının karesi:", kare);
}

/// Faktöriyel

let n = 5;
let sonuc;

if (n === 1 || n === 0) {
  sonuc = 1;
} else {
  for (let i = n - 1; i >= 1; i--) {
    sonuc = n *= i;
  }
}
console.log(sonuc);

for (let i = 1; i <= 5; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a = a + "*";
  }
  console.log(a);
}
