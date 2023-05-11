// console.log("ok");

// const numberArray = [1, 2, 3];

// numberArray.map(docso);

// function docso(item, index) {
//   console.log(item);
// }

// Array.prototype.map2 = (a,b) => {
//   a = this[]
// }

// //Mục đích để khắc phục Bất đồng bộ

// setTimeout(() => {
//   console.log(1);
// }, 2000);

// console.log(2);

function a(name, age) {
  this.name = name;
  this.age = age;
}

a.prototype.map2 = "thêm";

const b = new a("sang", "18");

console.log(b.map2);

// console.log(a);
