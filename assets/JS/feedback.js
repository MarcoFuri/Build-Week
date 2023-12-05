// CLICK CAMBIO SELEZIONE

function coloraStelle(id) {
    for (i = 1; i < 11; i++) {
    if (i <= id) {
      document.getElementById(i).style.color = "rgb(0, 255, 255)";
    } else {
      document.getElementById(i).style.color = "#03082f";
    }
   }
  }




// CLICK SCOMPARE, CLICK RISELEZIONA

// function coloraStelle(id) {
//   let star = document.getElementById("1");
//   let arrayStars = document.querySelectorAll("i");
//   if (star.style.color === "rgb(0, 255, 255)") {
//     arrayStars.forEach((element) =>
//       element.removeAttribute("style")); 
//   } else {
//     arrayStars.forEach((element) => element.removeAttribute("style"))
//     for (i = 1; i < 11; i++) {
//     if (i <= id) {
//       document.getElementById(i).style.color = "rgb(0, 255, 255)";
//     } else {
//       document.getElementById(i).style.color = "#03082f";
//     }
//    }
//   }
// }