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


// creiamo la ciambella 
window.onload = function () {
  const chartData = {
    labels: ['giuste', 'sbagliate'],
    datasets: [
      {
        data: [right, wrong],
        backgroundColor: ["#00FFFF", "#D20094"],
        cutout: "65%",
      },
    ],
  };

const myChart = new Chart(document.getElementById("myChart"), {
  type: "doughnut",
  data: chartData,
  options: {
    borderWidth: 0,
    hoverBorderWidth: 0,
    borderRadius: 0,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
}

// esce il risultato in mezzo alla ciambella
function doughnutText(){
if(wrong > right){
   document.getElementById("passedExam").classList.add('hidden');
  }else{
    document.getElementById("failedExam").classList.add('hidden');
  }
}

doughnutText()

// mettiamo le percentuali ai lati
function percentage()
{
  const risposteEstatte = right * 10 + "%";
  document.getElementById("percentageRight").innerText = risposteEstatte;
  const risposteErrate = wrong * 10 + "%";
  document.getElementById("percentageWrong").innerText = risposteErrate;
}

percentage();


document.getElementById("counterQuestions1").innerText = right +"/10";

document.getElementById("counterQuestions2").innerText = wrong +"/10";
