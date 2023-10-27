var popup = document.getElementById("container");
var btn = document.getElementById("popupBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
popupBtn.onclick = function() {
    container.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    container.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.target == modal) {
        container.style.display = "none";
    }
}
