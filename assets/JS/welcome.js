function proceedFromWelcome() {
    let checkbox = document.getElementById("checkbox")
    if (checkbox.checked){
        window.location.href = "./questions.html"
    } else {
        alert("You need to accept the condition first")
    }
}