function doSomething(evt) {
    evt.target.style.backgroundColor = "red"
    const test = 'Oklahoma Sooners';
    console.log(test)
}

// Traditional Event Registration
// document.getElementById("myDiv").onclick = doSomething;


// Event Listener
document.getElementById("myDiv").addEventListener("click", doSomething);




// document.querySelector
// document.querySelectorAll