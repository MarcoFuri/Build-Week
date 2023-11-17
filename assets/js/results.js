// const right = localStorage.getItem("right");
// console.log(right);  

// const wrong = localStorage.getItem("wrong")
// console.log(wrong)

const queryString = location.search.substring(1);
console.log(queryString)

let queryStringArray = queryString.split("|");
console.log(queryStringArray)

let right = queryStringArray[0]
console.log(right)

let wrong = queryStringArray[1]
console.log(wrong)