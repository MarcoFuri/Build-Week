// const right = localStorage.getItem("right");
// console.log(right);  

// const wrong = localStorage.getItem("wrong")
// console.log(wrong)

const queryString = location.search.substring(1);
console.log(queryString)

let right = queryString[0]
let wrong = queryString[2]
