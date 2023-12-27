function proceedFromWelcome() {
    let checkbox = document.getElementById("checkbox")
    if (checkbox.checked){
        window.location.href = "./questions.html"
    } else {
        alert("Please accept the condition before starting the test!")
    }
}